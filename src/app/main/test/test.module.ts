import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
// import { TranslateModule } from '@ngx-translate/core';

// import { FuseSharedModule } from '@fuse/shared.module';

import { TestComponent } from './test.component';

const routes = [
    {
        path     : 'test',
        component: TestComponent
    }
];

@NgModule({
    declarations: [
        TestComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        FormsModule,
        BrowserModule,
        // TranslateModule,

        // FuseSharedModule
    ],
    exports     : [
        TestComponent
    ]
})

export class TestModule
{
}
