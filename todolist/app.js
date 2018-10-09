let list= [
            {
		    	title:"我想这周吧vue学会",
		    	isCompleted:false
		    },
		    {
		    	title:"半年学武功",
		    	isCompleted:true
		    }
]; 
        
var app = new Vue({
	el:"#todolist",
	data:{
		addInp:"",
		listItems:[],
		editingIndex:Number,
		beforeEdit:String,
		state:3
	},
	computed:{
		num:function(){ 
			return this.listItems.filter(function(x){
				return !x.isCompleted
			}).length;
		},
		newList:function(){
			if(this.state == 1){
			    return this.listItems.filter(x=> !x.isCompleted);
		    }else if(this.state==2){
			    return this.listItems.filter(x=> x.isCompleted);
			}else{
				return this.listItems;
			}
		}
	}, 
	methods:{
		add:function(){
			this.listItems.push({title:this.addInp,isCompleted:false});
			this.addInp="";
		},
		del:function(index){
			this.listItems.splice(index,1);
		},
		addEdit:function(index){
			this.editingIndex=index
			this.beforeEdit=this.listItems[index].title
		},
		endEdit:function(){
			this.editingIndex=null;
			this.beforeEdit="";
		},
		goback:function(index){
			this.listItems[index].title=this.beforeEdit
			this.editingIndex=null;
		},
		change:function(v){
			this.state = v;
		}
	}
})