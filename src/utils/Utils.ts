export class Utils{
public MAX_TOKEN_TIME= 6000;

    static genrateVerificationToken(size:Number = 5){
        let digits ='0123456789';
        let otp ='';
        for (let i = 0; i < size; i++) {
            otp += digits[Math.floor(Math.random()*10)];
            
        }
        return parseInt(otp);
    }
}