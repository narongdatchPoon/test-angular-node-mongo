import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

// import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

// import { locale as english } from './i18n/en';
// import { locale as turkish } from './i18n/tr';

@Component({
    selector   : 'test',
    templateUrl: './test.component.html',
    styleUrls  : ['./test.component.css']
})
export class TestComponent implements OnInit
{
    mData:any[] = []
    constructor(private http:HttpClient)
    {

    }

    onSubmit(data)
    {
        alert(JSON.stringify(data))

        this.http.post<any>('http://localhost:3000/api',data).subscribe(result=>{
            alert(JSON.stringify(result))
            this.getAllFeedback()
        })
    }

    getAllFeedback(){
        this.http.get<any>('http://localhost:3000/getall').subscribe(result=>{
            this.mData = result.data
            // alert(JSON.stringify(result))
        })
    }

    ngOnInit():void{
        this.getAllFeedback();
    }
    // constructor(
    //     private _fuseTranslationLoaderService: FuseTranslationLoaderService
    // )
    // {
    //     this._fuseTranslationLoaderService.loadTranslations(english, turkish); 
    // }
}
