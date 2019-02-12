import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthLoginService } from "./service/auth-login.service";
import { AlertService } from "./services/auth-register.service";

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LOginComponent implements OnInit {

}

export class AppComponent {
  title = 'app';
}
