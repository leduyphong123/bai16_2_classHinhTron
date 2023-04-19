let Circle=function (radius,color){
    this.radius=radius;
    this.color=color;
    this.getRadius=function(){
        document.write("ban kinh = " +this.radius+"<br/>");
    }
    this.getArea=function(){
        let s=this.radius*this.radius*3.14;
        document.write("dien tich ="+s);
    }
}

let result = new Circle(5,"red");
result.getRadius();
result.getArea();