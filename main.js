var a=[1,3,5,8,9,10]
var b=[2,6,4,9,8,10]
var c=[]
var temp

for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        if(a[i]!=b[j]){
            temp=true
        }
        else{
            temp=false
            break
        }
    }
    if(temp==true){
        c.push(a[i])
    }
}
console.log(c)