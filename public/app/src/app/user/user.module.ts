import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MdlModule, MdlSnackbarModule, MdlSnackbarService, MdlDialogModule, MdlDialogService } from "@angular-mdl/core";
import { MdlPopoverModule } from "@angular-mdl/popover";
import { MdlSelectModule } from "@angular-mdl/select";

import { UserFormComponent } from "./user-form/user-form.component";
import { UserListComponent } from "./user-list/user-list.component";

import { UserService } from "./user.service";
import { ErrorHandlerService } from "../shared/error-handler.service";
import { UserResolver, UserListResolver } from "./user-resolver.service";

import { UserRouting } from "./user-routing.module";


@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MdlModule,
    MdlPopoverModule,
    MdlSelectModule,
    MdlSnackbarModule,
    MdlDialogModule,
    UserRouting
  ],
  providers: [
    UserService,
    UserResolver,
    UserListResolver,
    ErrorHandlerService,
    MdlSnackbarService,
    MdlDialogService
  ]
})
export class UserModule { }
