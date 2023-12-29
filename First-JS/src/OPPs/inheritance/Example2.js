class HDFC_Bank_Version1{
    Personal = "Personal Banking Services";
    NRI = "NRI Banking Service";

    print(){
        console.log(` Personal = ${this.Personal}\n NRI = ${this.NRI}`)
    }
}

class HDFC_Bank_Version2 extends HDFC_Bank_Version1{
    Loans = "House Loans";
    print(){
        super.print();
        console.log(` Loans = ${this.Loans}`)
    }
}

var obj = new HDFC_Bank_Version2();
obj.print();

