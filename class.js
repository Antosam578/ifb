class Info{
    name="Antony"
    age=32
    native="Ariyalur"
 detail(){
    console.log('my name is ',this.name,' and age is',this.age,'and native is ',this.native)
 }
}
 const print = new Info
 console.log(print.name)
 print.detail()

 class Flower{
   constructor(name,colour,fragrance,season){
      this.name=name;
      this.colour=colour;
      this.fragrance=fragrance;
      this.season=season;
      }

      details(){
         console.log("flower name is ",this.name)
          console.log(`colour is ${this.colour}`)
           console.log("fragrace is ",this.fragrance)
             console.log("season is ",this.season)
      }
 }
 const rose =new Flower("ROse","red","mild","all season");
 rose.details()

 const jasmin = new Flower("jasmin","white","heavy","summer")
 jasmin.details()
