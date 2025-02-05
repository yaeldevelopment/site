import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  // ייבוא המודול
import { FunctionService } from '../../service/function.service';
import FormData_Mail from '../../Models/FormData';
declare var jQuery: any; // Declare jQuery if not typed.
@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  myForm!: FormGroup;
  isAlertVisible: boolean = false;  // Control alert visibility
  sixDigitCode: number | null = null; // Store generated 6-digit code

constructor(private fb: FormBuilder,private serv:FunctionService){

}
ngOnInit() {
  this.myForm = this.fb.group({
    name_customer: ['', [Validators.required]],  // שדה חובה
    email_contact: ['', [ Validators.email]],
    phone_customer: ['', [Validators.required,Validators.pattern(/^\+?\d{1,3}\d{9,15}$/)]],
    message:['']
  });

  // עדכון מצב הטופס בזמן שינוי הערכים

  
}
  onSubmit() {
    if (this.myForm!=undefined && this.myForm.valid) {
     let  data=new FormData_Mail(this.myForm.get("email_contact")?.value,this.myForm.get("phone_customer")?.value,this.myForm.get("name_customer")?.value,this.myForm.get("message")?.value)
      this.serv.send_Mail(data).subscribe((response)=>{
        if(response.success){
    showPopup("success", response.message)
        }
        else{
        showPopup("error", response.responseJSON.message)
        }
  
        
      })

      function showPopup(err_suc:string, richtext:string) {
        jQuery("#" + err_suc + "-popup .rich_text").html(richtext);
        jQuery("#" + err_suc + "-popup").removeClass("hide");
        jQuery("#overlay").removeClass("hide");
}
    }
  }
}
