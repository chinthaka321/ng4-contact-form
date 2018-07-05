import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserNameValidators {
    static cannotContainSpace(control:AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0)
            return  {cannotContainSpace:true};
        
        return null;
    }

    static cannotContainStar(control:AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf('*') >= 0)
            return {cannotContainStar: {
                valid:true,
                value1:'test value 1',
                value2: 'test value 2'
            }};

            return null;
    }

    // Async validator
    static shouldBeUnique(control:AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve,reject)=>{
            setTimeout(()=> {
                console.log('ok');
                if(control.value === 'mosh')
                    resolve({ shouldBeUnique : true});
                else 
                    resolve(null);
                  
            },2000);
        });
    }
}