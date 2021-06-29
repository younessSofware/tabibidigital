(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+SuS":
/*!*******************************************!*\
  !*** ./src/app/pipes/text-resume.pipe.ts ***!
  \*******************************************/
/*! exports provided: TextResumePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextResumePipe", function() { return TextResumePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TextResumePipe {
    transform(value, args) {
        return value.slice(0, args ? args : 10) + (args < value.length ? '...' : '');
    }
}
TextResumePipe.ɵfac = function TextResumePipe_Factory(t) { return new (t || TextResumePipe)(); };
TextResumePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "Resume", type: TextResumePipe, pure: true });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\youne\Pictures\angular-project\projectMedical\src\main.ts */"zUnb");


/***/ }),

/***/ "0HXt":
/*!*************************************!*\
  !*** ./src/models/ConstantChats.ts ***!
  \*************************************/
/*! exports provided: ConstantChats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantChats", function() { return ConstantChats; });
class ConstantChats {
    constructor() {
        this.prompts = [
            ["hi", "hey", "hello", "good morning", "good afternoon"],
            ["how are you", "how is life", "how are things"],
            ["what are you doing", "what is going on", "what is up"],
            ["how old are you"],
            ["who are you", "are you human", "are you bot", "are you human or bot"],
            ["who created you", "who made you"],
            [
                "your name please",
                "your name",
                "may i know your name",
                "what is your name",
                "what call yourself"
            ],
            ["i love you"],
            ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
            ["bad", "bored", "tired"],
            ["help me", "tell me story", "tell me joke"],
            ["ah", "yes", "ok", "okay", "nice"],
            ["bye", "good bye", "goodbye", "see you later"],
            ["what should i eat today"],
            ["bro"],
            ["what", "why", "how", "where", "when"],
            ["no", "not sure", "maybe", "no thanks"],
            [""],
            ["haha", "ha", "lol", "hehe", "funny", "joke"]
        ];
        // Possible responses, in corresponding order
        this.replies = [
            ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
            [
                "Fine... how are you?",
                "Pretty well, how are you?",
                "Fantastic, how are you?"
            ],
            [
                "Nothing much",
                "About to go to sleep",
                "Can you guess?",
                "I don't know actually"
            ],
            ["I am infinite"],
            ["I am just a bot", "I am a bot. What are you?"],
            ["The one true God, JavaScript"],
            ["I am nameless", "I don't have a name"],
            ["I love you too", "Me too"],
            ["Have you ever felt bad?", "Glad to hear it"],
            ["Why?", "Why? You shouldn't!", "Try watching TV"],
            ["What about?", "Once upon a time..."],
            ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
            ["Bye", "Goodbye", "See you later"],
            ["Sushi", "Pizza"],
            ["Bro!"],
            ["Great question"],
            ["That's ok", "I understand", "What do you want to talk about?"],
            ["Please say something :("],
            ["Haha!", "Good one!"]
        ];
        // Random for any other user input
        this.alternative = [
            "Same",
            "Go on...",
            "Bro...",
            "Try again",
            "I'm listening...",
            "I don't understand :/"
        ];
        // Whatever else you want :)
        this.coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"];
    }
}


/***/ }),

/***/ "0gXa":
/*!*********************************!*\
  !*** ./src/models/Infermeri.ts ***!
  \*********************************/
/*! exports provided: Infermerie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Infermerie", function() { return Infermerie; });
class Infermerie {
    constructor(_id, _phone, _malades, _nom, _prenom, _email, _adresse) {
        this._id = _id;
        this.phone = _phone;
        this.nom = _nom;
        this.prenom = _prenom;
        this.email = _email;
        this.adresse = _adresse;
    }
}


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "305l":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/login.service */ "EFyh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "6n5F");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webcam */ "QKVY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [
        _services_login_service__WEBPACK_IMPORTED_MODULE_0__["LoginService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamModule"]] }); })();


/***/ }),

/***/ 4:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "6/22":
/*!************************************!*\
  !*** ./src/app/errors/AppError.ts ***!
  \************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError {
    contructor(originalError) {
    }
}


/***/ }),

/***/ "6I3l":
/*!************************************************!*\
  !*** ./src/app/test-pfe/test-pfe.component.ts ***!
  \************************************************/
/*! exports provided: TestPFEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPFEComponent", function() { return TestPFEComponent; });
/* harmony import */ var src_models_PredParam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/PredParam */ "wZ7R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_predictions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/predictions.service */ "lIeI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TestPFEComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TestPFEComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TestPFEComponent_div_6_div_1_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" you have a type ", ctx_r0.result, " ");
} }
class TestPFEComponent {
    constructor(predService) {
        this.predService = predService;
        this.loading = true;
    }
    ngOnInit() {
    }
    uploadDone(event) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            this.uploadedImgs = reader.result;
        };
        this.predService.predict(new src_models_PredParam__WEBPACK_IMPORTED_MODULE_0__["PredParam"](document.getElementById('target')), 'Breast').then((pred) => {
            console.log(pred);
            this.loading = true;
            this.result = Math.max(...pred);
        }, err => {
            this.loading = true;
        });
    }
}
TestPFEComponent.ɵfac = function TestPFEComponent_Factory(t) { return new (t || TestPFEComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_predictions_service__WEBPACK_IMPORTED_MODULE_2__["PredictionsService"])); };
TestPFEComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestPFEComponent, selectors: [["app-test-pfe"]], decls: 7, vars: 3, consts: [[1, "input-group", "mb-3", "p-5"], ["for", "inputGroupFile01", 1, "input-group-text"], ["type", "file", "id", "inputGroupFile01", 1, "form-control", 3, "change"], [1, "d-flex", "justify-content-center", "mt-2"], ["id", "target", 3, "src", "width"], ["class", "d-flex justify-content-center my-2", 4, "ngIf"], [1, "d-flex", "justify-content-center", "my-2"], ["class", "spinner-border text-primary", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"]], template: function TestPFEComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TestPFEComponent_Template_input_change_3_listener($event) { return ctx.uploadDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TestPFEComponent_div_6_Template, 4, 2, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.uploadedImgs, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("width", ctx.uploadedImgs ? "200" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uploadedImgs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LXBmZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "6n5F":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../models/User */ "RY/o");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webcam */ "QKVY");







function LoginComponent_form_3_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_form_3_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_3_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.usingCamera = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_3_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.login(_r14.value, _r15.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginComponent_form_3_div_14_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LoginComponent_form_3_span_15_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Or Sign in with social platforms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.loadingSignIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loadingSignIn);
} }
function LoginComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_form_60_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_form_60_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Take Screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_form_60_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_form_60_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Repeat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_form_60_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "webcam", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("imageCapture", function LoginComponent_form_60_Template_webcam_imageCapture_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.handleImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_60_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.triggerSnapshot(_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LoginComponent_form_60_div_9_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LoginComponent_form_60_span_10_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LoginComponent_form_60_span_11_Template, 2, 0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, LoginComponent_form_60_span_12_Template, 4, 0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 300)("width", 400)("imageQuality", 1)("trigger", ctx_r13.triggerObservable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("text-success", ctx_r13.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.loadingCamera == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r13.loadingCamera && ctx_r13.success == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r13.loadingCamera && ctx_r13.success == false);
} }
class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loadingSignIn = true;
        this.startSignup = false;
        this.usingCamera = false;
        this.photos = [];
        this.valueOfButton = 'Add your face image';
        this.err = '';
        this.loading = true;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.errCamera = false;
    }
    init() {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".ma-container");
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });
        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
    }
    ngOnInit() {
        this.init();
    }
    login(email, password) {
        this.loadingSignIn = false;
        this.loginService.signin(email, password)
            .subscribe((res) => {
            this.loadingSignIn = true;
            localStorage.setItem('token', res.token);
            res.user.photos[0].data = 'data:image/png;base64,' + this.arrayBufferToBase64(res.user.photos[0].data);
            localStorage.setItem('user', JSON.stringify(res.user));
            this.router.navigateByUrl('/dash');
        });
    }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }
    register(nom, prenom, email, password, specialisation, nomClinique, adresseClinique) {
        this.loading = false;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_0__["User"](nom, prenom, email, password, specialisation, nomClinique, adresseClinique);
        this.photos.map((photo) => {
            this.user.photos.push(photo);
        });
        let faceids = [];
        this.err = '';
        let reader = new FileReader();
        let blob;
        const file = this.user.photos[0];
        file.arrayBuffer().then(arrayBuffer => {
            let blob = new Blob([new Uint8Array(arrayBuffer)], { type: file.type });
            this.loginService.upload(blob).subscribe((res) => {
                if (res.length) {
                    faceids = res;
                    this.user.faceIds = faceids;
                    this.loginService.signup(this.user)
                        .subscribe((res) => {
                        this.loading = true;
                        console.log(res);
                        document.getElementById('sign-in-btn').click();
                    }, err => {
                        this.loading = true;
                    });
                }
                else {
                    this.err = "You cannot detect a face in your images";
                    this.loading = true;
                }
            });
        });
    }
    handleImage(event) {
        this.test(event._imageAsDataUrl);
    }
    selectFiles(target) {
        this.photos = [];
        const files = target.files;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type != "image/jpeg" && files[i].type !== "image/png" && files[i].type !== "image/jpg") {
                alert("just images");
                return;
            }
            else {
                this.photos.push(files[i]);
            }
        }
    }
    triggerSnapshot(webcam) {
        this.trigger.next();
        webcam.video.nativeElement.pause();
        webcam.mediaStream.getTracks().forEach(track => track.stop());
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
    test(data64) {
        this.loadingCamera = true;
        const blob = this.dataURItoBlob(data64);
        this.loginService.detectFaceByCamera(blob)
            .subscribe((res) => {
            if (res.lenght == 0) {
                this.errorTakeImage = "error, repeat";
            }
            else {
                this.loginService.signinByCamera(res[0].faceId)
                    .subscribe((data) => {
                    this.loadingCamera = false;
                    if (data.token) {
                        this.success = true;
                        localStorage.setItem('token', data.token);
                        data.user.photos[0].data = 'data:image/png;base64,' + this.arrayBufferToBase64(data.user.photos[0].data);
                        localStorage.setItem('user', JSON.stringify(data.user));
                        this.router.navigateByUrl('/dash');
                    }
                }, err => {
                    this.success = false;
                    this.loadingCamera = false;
                });
            }
        }, err => {
        });
    }
    getDataUrl(img) {
        // Create canvas
        const canvas = document.createElement("canvas");
        ;
        const ctx = canvas.getContext('2d');
        // Set width and height
        canvas.width = img.width;
        canvas.height = img.height;
        // Draw the image
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL('image/jpeg');
    }
    dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([ab], { type: mimeString });
        return blob;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 79, vars: 10, consts: [[1, "ma-container", 3, "ngClass"], [1, "forms-container"], [1, "signin-signup", 3, "ngClass"], ["class", "sign-in-form", 4, "ngIf"], ["action", "#", 1, "sign-up-form"], [1, "title"], [1, "input-field"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "Nom"], ["nom", ""], ["type", "text", "placeholder", "Prenom"], ["prenom", ""], [1, "fas", "fa-briefcase-medical"], ["type", "specialisation", "placeholder", "Specialisation"], ["specialisation", ""], [1, "fas", "fa-clinic-medical"], ["type", "nomClinique", "placeholder", "Nom de clinique"], ["nomClinique", ""], [1, "fas", "fa-map-marker-alt"], ["type", "adresseClinique", "placeholder", "Adresse de clinique"], ["adresseClinique", ""], [1, "fas", "fa-envelope"], ["type", "email", "placeholder", "Email"], ["email2", ""], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Password"], ["pass2", ""], ["type", "password", "placeholder", "Repeter le password"], ["onclick", "document.getElementById('files').click()", 1, "input-field", "d-flex", "justify-content-center"], [4, "ngIf"], ["type", "button", 1, "mx-2", 3, "value"], ["type", "file", "id", "files", "hidden", "", 3, "change"], ["files", ""], [1, "invalid-feedback", "text-center", "font-weight-bold", 3, "ngClass"], ["type", "button", 1, "btn", 3, "click"], ["class", "spinner-border text-info", "role", "status", 4, "ngIf"], [1, "social-text"], [1, "social-media"], ["href", "#", 1, "social-icon"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-google"], [1, "fab", "fa-linkedin-in"], ["action", "#", "class", "sign-in-form", 4, "ngIf"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "content"], ["id", "sign-up-btn", 1, "btn", "transparent", 3, "click"], ["src", "../../../../assets/imgs/log.svg", "alt", "", 1, "image"], [1, "panel", "right-panel"], ["id", "sign-in-btn", 1, "btn", "transparent", 3, "click"], ["src", "../../../../assets/imgs/register.svg", "alt", "", 1, "image"], [1, "sign-in-form"], [3, "click"], ["src", "../../../../assets/imgs/d2.png", "alt", "Girl in a jacket", "width", "150", "height", "160", 1, "sali"], ["type", "text", "placeholder", "Username", "name", "email"], ["email", ""], ["type", "password", "placeholder", "Password", "name", "password"], ["password", ""], ["type", "button", 1, "btn", "solid", 3, "click"], ["role", "status", 1, "spinner-border", "text-info"], [1, "visually-hidden"], [1, "fas", "fa-plus"], ["action", "#", 1, "sign-in-form"], [1, "gallery"], [3, "height", "width", "imageQuality", "trigger", "imageCapture"], ["webcam", ""], ["style", "font-size: 30px;", 4, "ngIf"], [2, "font-size", "30px"], [1, "far", "fa-check-circle"], [1, "fas", "fa-exclamation-circle"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LoginComponent_form_3_Template, 27, 2, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 27, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, LoginComponent_span_40_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function LoginComponent_Template_input_change_42_listener($event) { return ctx.selectFiles($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](34); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26); return ctx.register(_r1.value, _r2.value, _r6.value, _r7.value, _r3.value, _r4.value, _r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, LoginComponent_div_47_Template, 3, 0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, LoginComponent_span_48_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Or Sign up with social platforms");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, LoginComponent_form_60_Template, 13, 10, "form", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Le patient dans le c\u0153ur et l\u2019excellence en t\u00EAte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_68_listener() { return ctx.startSignup = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Le patient dans le c\u0153ur et l\u2019excellence en t\u00EAte");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_76_listener() { return ctx.startSignup = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.startSignup ? "" : "hidden-y");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.startSignup ? "top-70" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.usingCamera);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.photos.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.photos.length ? "You choose " + ctx.photos.length + " images" : ctx.valueOfButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.err.length ? "d-block" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.err, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.usingCamera);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_webcam__WEBPACK_IMPORTED_MODULE_6__["WebcamComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.sali[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -20px;\n  top: 30%;\n  z-index: -1;\n}\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n.ma-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n  min-height: 100vh;\n  overflow-x: hidden;\n}\n.ma-container.hidden-y[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n.forms-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.signin-signup[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 75%;\n  width: 50%;\n  transition: 1s 0.7s ease-in-out;\n  display: grid;\n  grid-template-columns: 1fr;\n  z-index: 5;\n}\n.top-70[_ngcontent-%COMP%] {\n  top: 70% !important;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  transition: all 0.2s 0.7s;\n  overflow: hidden;\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\nform.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\nform.sign-in-form[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: #444;\n  margin-bottom: 10px;\n}\n.input-field[_ngcontent-%COMP%] {\n  max-width: 380px;\n  width: 100%;\n  background-color: #f0f0f0;\n  margin: 10px 0;\n  height: 55px;\n  border-radius: 55px;\n  display: flex;\n  padding: 0 0.4rem;\n  position: relative;\n  align-items: center;\n  justify-content: space-around;\n}\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 55px;\n  color: #acacac;\n  transition: 0.5s;\n  font-size: 1.1rem;\n}\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  outline: none;\n  border: none;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #333;\n}\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n.social-text[_ngcontent-%COMP%] {\n  padding: 0.7rem 0;\n  font-size: 1rem;\n}\n.social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.social-icon[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 46px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.45rem;\n  color: #333;\n  border-radius: 50%;\n  border: 1px solid #333;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: 0.3s;\n}\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: #3be8ff;\n  border-color: #3be8ff;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #3be8ff;\n  border: none;\n  outline: none;\n  height: 49px;\n  border-radius: 49px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #3be8ff;\n}\n.panels-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.ma-container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 2000px;\n  width: 2000px;\n  top: -10%;\n  right: 48%;\n  transform: translateY(-50%);\n  background-image: linear-gradient(-45deg, #3be8ff 0%, #04befe 100%);\n  transition: 1.8s ease-in-out;\n  border-radius: 50%;\n  z-index: 6;\n}\n.image[_ngcontent-%COMP%] {\n  left: 0px;\n  top: 0px;\n  width: 90%;\n}\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  text-align: center;\n  z-index: 6;\n}\n.left-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n  padding: 3rem 17% 2rem 12%;\n}\n.right-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n  padding: 3rem 12% 2rem 17%;\n}\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #fff;\n  transition: transform 0.9s ease-in-out;\n  transition-delay: 0.6s;\n}\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  line-height: 1;\n  font-size: 1.5rem;\n}\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  padding: 0.7rem 0;\n}\n.btn.transparent[_ngcontent-%COMP%] {\n  margin: 0;\n  background: none;\n  border: 2px solid #fff;\n  width: 130px;\n  height: 41px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(800px);\n}\n\n.ma-container.sign-up-mode[_ngcontent-%COMP%]:before {\n  transform: translate(100%, -50%);\n  right: 52%;\n}\n.ma-container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .ma-container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(-800px);\n}\n.ma-container.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n  left: 25%;\n}\n.ma-container.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 2;\n}\n.ma-container.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n.ma-container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .ma-container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n}\n.ma-container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.ma-container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n@media (max-width: 870px) {\n  .ma-container[_ngcontent-%COMP%] {\n    min-height: 800px;\n    height: 100vh;\n  }\n\n  .signin-signup[_ngcontent-%COMP%] {\n    width: 100%;\n    top: 95%;\n    transform: translate(-50%, -100%);\n    transition: 1s 0.8s ease-in-out;\n  }\n\n  .signin-signup[_ngcontent-%COMP%], .ma-container.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    left: 50%;\n  }\n\n  .panels-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n  }\n\n  .panel[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 2.5rem 8%;\n    grid-column: 1/2;\n  }\n\n  .right-panel[_ngcontent-%COMP%] {\n    grid-row: 3/4;\n  }\n\n  .left-panel[_ngcontent-%COMP%] {\n    grid-row: 1/2;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    width: 200px;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.6s;\n  }\n\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-right: 15%;\n    transition: transform 0.9s ease-in-out;\n    transition-delay: 0.8s;\n  }\n\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.5rem 0;\n  }\n\n  .btn.transparent[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 35px;\n    font-size: 0.7rem;\n  }\n\n  .ma-container[_ngcontent-%COMP%]:before {\n    width: 1500px;\n    height: 1500px;\n    transform: translateX(-50%);\n    left: 30%;\n    bottom: 68%;\n    right: initial;\n    top: initial;\n    transition: 2s ease-in-out;\n  }\n\n  .ma-container.sign-up-mode[_ngcontent-%COMP%]:before {\n    transform: translate(-50%, 100%);\n    bottom: 32%;\n    right: initial;\n  }\n\n  .ma-container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .ma-container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(-300px);\n  }\n\n  .ma-container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .ma-container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(0px);\n  }\n\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    transform: translateY(300px);\n  }\n\n  .ma-container.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\n    top: 5%;\n    transform: translate(-50%, 0);\n  }\n}\n@media (max-width: 570px) {\n  form[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n  }\n\n  .ma-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .ma-container[_ngcontent-%COMP%]:before {\n    bottom: 72%;\n    left: 50%;\n  }\n\n  .ma-container.sign-up-mode[_ngcontent-%COMP%]:before {\n    bottom: 28%;\n    left: 50%;\n  }\n}\ndiv.gallery[_ngcontent-%COMP%] {\n  margin: 5px;\n  border: 1px solid #2affff;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkdBQUE7QUFFUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFBRjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFDSjtBQUVBOztFQUVFLGtDQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQUNGO0FBRUE7RUFDRSxtQkFBQTtBQUNGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQUY7QUFHQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLFVBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGFB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WUFBQTtJQUNBLDBCQUFBO0VBQUY7O0VBR0E7SUFDRSxnQ0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VBQUY7O0VBR0E7O0lBRUUsNkJBQUE7RUFBRjs7RUFHQTs7SUFFRSwwQkFBQTtFQUFGOztFQUdBOztJQUVFLDRCQUFBO0VBQUY7O0VBR0E7SUFDRSxPQUFBO0lBQ0EsNkJBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRTtJQUNFLGlCQUFBO0VBREY7O0VBSUE7SUFDRSxhQUFBO0VBREY7O0VBR0E7SUFDRSxvQkFBQTtFQUFGOztFQUVBO0lBQ0UsZUFBQTtFQUNGOztFQUVBO0lBQ0UsV0FBQTtJQUNBLFNBQUE7RUFDRjs7RUFFQTtJQUNFLFdBQUE7SUFDQSxTQUFBO0VBQ0Y7QUFDRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uc2FsaXsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMjBweDtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgXHJcbn1cclxuYm9keSxcclxuaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1hLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4ubWEtY29udGFpbmVyLmhpZGRlbi15e1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmZvcm1zLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnNpZ25pbi1zaWdudXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA3NSU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0cmFuc2l0aW9uOiAxcyAwLjdzIGVhc2UtaW4tb3V0O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLnRvcC03MHtcclxuICB0b3A6IDcwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwcmVtIDVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgMC43cztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICBncmlkLXJvdzogMSAvIDI7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi1pbi1mb3JtIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWF4LXdpZHRoOiAzODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAwLjRyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCBpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgY29sb3I6ICNhY2FjYWM7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtdGV4dCB7XHJcbiAgcGFkZGluZzogMC43cmVtIDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc29jaWFsLWljb24ge1xyXG4gIGhlaWdodDogNDZweDtcclxuICB3aWR0aDogNDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDAuNDVyZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6ICMzYmU4ZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiMzYmU4ZmY7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2JlOGZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogNDlweDtcclxuICBib3JkZXItcmFkaXVzOiA0OXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiZThmZjtcclxufVxyXG4ucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbn1cclxuXHJcbi5tYS1jb250YWluZXI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDIwMDBweDtcclxuICB3aWR0aDogMjAwMHB4O1xyXG4gIHRvcDogLTEwJTtcclxuICByaWdodDogNDglO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjM2JlOGZmIDAlLCAjMDRiZWZlIDEwMCUpO1xyXG4gIHRyYW5zaXRpb246IDEuOHMgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDY7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiBcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiA2O1xyXG59XHJcblxyXG4ubGVmdC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBwYWRkaW5nOiAzcmVtIDE3JSAycmVtIDEyJTtcclxufVxyXG5cclxuLnJpZ2h0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBwYWRkaW5nOiAzcmVtIDEyJSAycmVtIDE3JTtcclxufVxyXG5cclxuLnBhbmVsIC5jb250ZW50IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4ucGFuZWwgaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5wYW5lbCBwIHtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgcGFkZGluZzogMC43cmVtIDA7XHJcbn1cclxuXHJcbi5idG4udHJhbnNwYXJlbnQge1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGhlaWdodDogNDFweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4ucmlnaHQtcGFuZWwgLmltYWdlLFxyXG4ucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MDBweCk7XHJcbn1cclxuXHJcbi8qIEFOSU1BVElPTiAqL1xyXG5cclxuLm1hLWNvbnRhaW5lci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcclxuICByaWdodDogNTIlO1xyXG59XHJcblxyXG4ubWEtY29udGFpbmVyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuaW1hZ2UsXHJcbi5tYS1jb250YWluZXIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwMHB4KTtcclxufVxyXG5cclxuLm1hLWNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnNpZ25pbi1zaWdudXAge1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuLm1hLWNvbnRhaW5lci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLXVwLWZvcm0ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm1hLWNvbnRhaW5lci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLWluLWZvcm0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1hLWNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuLm1hLWNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG59XHJcblxyXG4ubWEtY29udGFpbmVyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5tYS1jb250YWluZXIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XHJcbiAgLm1hLWNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC5zaWduaW4tc2lnbnVwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiA5NSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyAwLjhzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLnNpZ25pbi1zaWdudXAsXHJcbiAgLm1hLWNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnNpZ25pbi1zaWdudXAge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVscy1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyLjVyZW0gOCU7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgfVxyXG5cclxuICAucmlnaHQtcGFuZWwge1xyXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xyXG4gIH1cclxuXHJcbiAgLmxlZnQtcGFuZWwge1xyXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcblxyXG4gIC5wYW5lbCAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgfVxyXG5cclxuICAucGFuZWwgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAucGFuZWwgcCB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi50cmFuc3BhcmVudCB7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcblxyXG4gIC5tYS1jb250YWluZXI6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIGJvdHRvbTogNjglO1xyXG4gICAgcmlnaHQ6IGluaXRpYWw7XHJcbiAgICB0b3A6IGluaXRpYWw7XHJcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5tYS1jb250YWluZXIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcclxuICAgIGJvdHRvbTogMzIlO1xyXG4gICAgcmlnaHQ6IGluaXRpYWw7XHJcbiAgfVxyXG5cclxuICAubWEtY29udGFpbmVyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuaW1hZ2UsXHJcbiAgLm1hLWNvbnRhaW5lci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDBweCk7XHJcbiAgfVxyXG5cclxuICAubWEtY29udGFpbmVyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmltYWdlLFxyXG4gIC5tYS1jb250YWluZXIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcblxyXG4gIC5yaWdodC1wYW5lbCAuaW1hZ2UsXHJcbiAgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDBweCk7XHJcbiAgfVxyXG5cclxuICAubWEtY29udGFpbmVyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5wYW5lbCAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICB9XHJcbiAgLm1hLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAubWEtY29udGFpbmVyOmJlZm9yZSB7XHJcbiAgICBib3R0b206IDcyJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5tYS1jb250YWluZXIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XHJcbiAgICBib3R0b206IDI4JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbn1cclxuZGl2LmdhbGxlcnkge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig0MiwgMjU1LCAyNTUpO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59Il19 */"] });


/***/ }),

/***/ "7iTU":
/*!**************************************!*\
  !*** ./src/app/errors/BadRequest.ts ***!
  \**************************************/
/*! exports provided: BadRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadRequest", function() { return BadRequest; });
/* harmony import */ var _AppError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppError */ "6/22");

class BadRequest extends _AppError__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "7jrk":
/*!********************************************************************!*\
  !*** ./src/app/modules/dashboard/pharmacie/pharmacie.component.ts ***!
  \********************************************************************/
/*! exports provided: PharmacieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacieComponent", function() { return PharmacieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/user.service */ "qfBg");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/patient.service */ "7wfR");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "eLR9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PharmacieComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const malade_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", malade_r7._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](malade_r7.nom);
} }
function PharmacieComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", patient_r8._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patient_r8.nom + " " + patient_r8.prenom, " ");
} }
function PharmacieComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const medicament_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", medicament_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](medicament_r9);
} }
function PharmacieComponent_ul_35_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PharmacieComponent_ul_35_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const index_r11 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.medicaments.splice(index_r11, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const medicament_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", medicament_r10, " ");
} }
class PharmacieComponent {
    constructor(userService, patientService) {
        this.userService = userService;
        this.patientService = patientService;
        this.dataLoading = false;
        this.malades = [];
        this.patients = [];
        this.medicaments = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.getMalades();
    }
    getMalades() {
        this.userService.getAlls(this.user._id).
            subscribe((resp) => {
            this.malades = resp.malades;
        });
    }
    selectMalade(malade) {
        this.getPatients(malade.value);
    }
    selectMedicament(meds) {
        this.medicaments.push(meds.value);
    }
    selectPatient(patient) {
    }
    downloadRapport() {
    }
    submit(value) {
    }
    getPatients(_id) {
        this.patientService.getPatientsOfMalade(_id)
            .subscribe((resp) => {
            this.patients = resp.patients;
        });
    }
    getMedicament(_id) {
        const index = this.malades.findIndex(malade => malade._id == _id);
        if (index >= 0) {
            return this.malades[index].medicaments;
        }
        else
            return [];
    }
}
PharmacieComponent.ɵfac = function PharmacieComponent_Factory(t) { return new (t || PharmacieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"])); };
PharmacieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PharmacieComponent, selectors: [["app-pharmacie"]], decls: 38, vars: 12, consts: [[1, "home-section"], [1, "sidebar-button"], [1, "dashboard"], [1, "profile-details"], ["alt", "", 3, "src"], [1, "admin_name"], [1, "bx", "bx-chevron-down"], [1, "home-content"], [1, "p-2", "p-sm-5"], [1, "w-100", 3, "ngSubmit"], ["for", "malade", 1, "p-2"], ["name", "malade", "id", "malade", 1, "form-control", "w-100", "mb-3", "p-2", 3, "change"], ["malade", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "patient", "id", "patient", 1, "form-control", "w-100", "mb-3", "p-2", 3, "change"], ["patient", ""], ["for", "medicament", 1, "p-2"], ["name", "medicament", "id", "medicament", 1, "form-control", "w-100", "p-2", 3, "change"], ["medicament", ""], ["class", "list-group p-2 my-2", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "btn-lg", "mt-4", "p-2"], [3, "value"], [1, "list-group", "p-2", "my-2"], [1, "list-group-item", "p-2", "d-flex", "justify-content-between", "align-items-center"], [1, "cursor-pointer", 2, "font-size", "20px", 3, "click"], [1, "far", "fa-times-circle"]], template: function PharmacieComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pharmacie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PharmacieComponent_Template_form_ngSubmit_13_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Select Malade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PharmacieComponent_Template_select_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.selectMalade(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PharmacieComponent_option_20_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Select patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PharmacieComponent_Template_select_change_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.selectPatient(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PharmacieComponent_option_27_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Select Medicaments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PharmacieComponent_Template_select_change_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.selectMedicament(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PharmacieComponent_option_34_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PharmacieComponent_ul_35_Template, 5, 1, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.photos[0].data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dr ", ctx.user.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-flex", !ctx.dataLoading)("justify-content-center", !ctx.dataLoading)("align-items-center", !ctx.dataLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.malades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.patients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getMedicament(_r0.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.medicaments);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 240px;\n  background: #09dbae;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: #fff;\n  min-width: 60px;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  height: 50px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: all 0.4s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #1ac7a1;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #11dbba;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: 60px;\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .log_out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f5f5f5;\n  min-height: 100vh;\n  width: calc(100% - 240px);\n  left: 240px;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  left: 60px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  width: calc(100% - 240px);\n  left: 240px;\n  z-index: 100;\n  padding: 0 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  left: 60px;\n  width: calc(100% - 60px);\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 10px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  max-width: 550px;\n  width: 100%;\n  margin: 0 20px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  font-size: 18px;\n  padding: 0 15px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background: #09e4b4;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 4px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  transition: all 0.4 ease;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  height: 50px;\n  min-width: 190px;\n  padding: 0 15px 0 2px;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 6px;\n  object-fit: cover;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  margin: 0 10px;\n  white-space: nowrap;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #333;\n}\n.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 104px;\n}\n.home-content[_ngcontent-%COMP%]   .overview-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  margin-bottom: 26px;\n}\n.overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: calc(100% / 4 - 15px);\n  background: #fff;\n  padding: 15px 14px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.overview-boxes[_ngcontent-%COMP%]   .box-topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 35px;\n  margin-top: -6px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background: #8FDACB;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 20px;\n  margin-right: 5px;\n}\n.box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i.down[_ngcontent-%COMP%] {\n  background: #e87d88;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  height: 50px;\n  width: 50px;\n  background: #cce5ff;\n  line-height: 50px;\n  text-align: center;\n  color: #66b0ff;\n  border-radius: 12px;\n  margin: -15px 0 0 6px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.two[_ngcontent-%COMP%] {\n  color: #2BD47D;\n  background: #C0F2D8;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.three[_ngcontent-%COMP%] {\n  color: #ffc233;\n  background: #ffe8b3;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.four[_ngcontent-%COMP%] {\n  color: #e05260;\n  background: #f7d4d7;\n}\n.home-content[_ngcontent-%COMP%]   .total-order[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  \n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .recent-sales[_ngcontent-%COMP%] {\n  width: 65%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  \n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li.topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n  font-size: 400;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #0A2558;\n  padding: 4px 12px;\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0dd488;\n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n  width: 35%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px 0 0;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin-right: 10px;\n  background: #333;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%], .price[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n  color: #333;\n}\n\n@media (max-width: 1240px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n    \n    overflow: hidden;\n    left: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 220px);\n    left: 220px;\n  }\n}\n@media (max-width: 1150px) {\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: scroll;\n    margin-bottom: 30px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 1000px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: calc(100% / 2 - 15px);\n    margin-bottom: 15px;\n  }\n}\n@media (max-width: 700px) {\n  nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    height: 50px;\n    min-width: 40px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n    width: 560px;\n  }\n}\n@media (max-width: 550px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  --msger-bg: #fff;\n  --border: 23px solid #ddd;\n  --left-msg-bg: #ececec;\n  --right-msg-bg: #26ff79;\n}\n.Neon[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #494949;\n  position: relative;\n}\n.Neon[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%] {\n  display: block;\n  width: 343px;\n  margin: 0 auto 25px auto;\n  padding: 25px;\n  color: #8d9499;\n  color: #97A1A8;\n  background: #fff;\n  border: 2px dashed #C8CBCE;\n  text-align: center;\n  transition: box-shadow 0.3s, border-color 0.3s;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%]   .Neon-input-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-top: -10px;\n  transition: all 0.3s ease;\n}\n.Neon-input-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n.Neon-input-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.Neon-input-choose-btn.blue[_ngcontent-%COMP%] {\n  color: #008BFF;\n  border: 1px solid #008BFF;\n}\n.Neon-input-choose-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 14px;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: bold;\n  color: #8d9496;\n  border-radius: 3px;\n  border: 1px solid #c6c6c6;\n  vertical-align: middle;\n  background-color: #fff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGhhcm1hY2llLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlHQUFBO0FBQ1I7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUE7RUFDRSxXQUFBO0FBQ0Y7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdGO0FBREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTUY7QUFKQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQU9GO0FBTEE7RUFDRSxtQkFBQTtBQVFGO0FBTkE7RUFDRSxtQkFBQTtBQVNGO0FBUEE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVVGO0FBUkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFXRjtBQVRBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQVlGO0FBVEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQVlKO0FBVkU7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUFhSjtBQVhFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtBQWNKO0FBWkU7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7QUFlSjtBQWJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBZ0JKO0FBZEU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFpQko7QUFmRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFrQko7QUFoQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQW1CSjtBQWpCRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBb0JKO0FBbEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFxQko7QUFuQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFzQko7QUFwQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBdUJKO0FBckJFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUF3Qko7QUF0QkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBeUJKO0FBdkJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBMEJKO0FBeEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBMkJKO0FBekJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBNEJKO0FBMUJFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTZCSjtBQTNCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQThCSjtBQTVCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBK0JKO0FBN0JFO0VBQ0UsbUJBQUE7QUFnQ0o7QUE5QkU7RUFDRSxlQUFBO0FBaUNKO0FBL0JFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWtDSjtBQWhDRTtFQUNHLGNBQUE7RUFDQSxtQkFBQTtBQW1DTDtBQWpDRTtFQUNHLGNBQUE7RUFDQSxtQkFBQTtBQW9DTDtBQWxDRTtFQUNHLGNBQUE7RUFDQSxtQkFBQTtBQXFDTDtBQW5DRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXNDSjtBQXBDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBdUNKO0FBckNFLGFBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUF3Q0o7QUF0Q0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXlDSjtBQXZDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBMENKO0FBeENFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBMkNKO0FBekNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBNENKO0FBMUNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUE2Q0o7QUEzQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBOENKO0FBNUNFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUErQ0o7QUE3Q0U7RUFDRSxtQkFBQTtBQWdESjtBQTdDRSxjQUFBO0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQWdESjtBQTlDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQWlESjtBQS9DRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFrREo7QUFoREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQW1ESjtBQWpERTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBb0RKO0FBbERFLDJCQUFBO0FBQ0E7RUFDRTtJQUNFLFdBQUE7RUFxREo7O0VBbkRFO0lBQ0UsWUFBQTtFQXNESjs7RUFwREU7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUF1REo7O0VBckRFO0lBQ0UsK0JBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUF3REo7O0VBdERFO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VBeURKOztFQXZERTtJQUNFLHlCQUFBO0lBQ0EsV0FBQTtFQTBESjtBQUNGO0FBeERFO0VBQ0U7SUFDRSxzQkFBQTtFQTBESjs7RUF4REU7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQTJESjs7RUF6REU7SUFDRSxTQUFBO0VBNERKO0FBQ0Y7QUExREU7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsbUJBQUE7RUE0REo7QUFDRjtBQTFERTtFQUNFOzs7SUFHRSxhQUFBO0VBNERKOztFQTFERTtJQUNFLFlBQUE7SUFDQSxlQUFBO0VBNkRKOztFQTNERTtJQUNFLFlBQUE7RUE4REo7QUFDRjtBQTVERTtFQUNFO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBOERKOztFQTVERTtJQUNFLGFBQUE7RUErREo7QUFDRjtBQTVERTtFQUNFLDREQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUE4REo7QUExREU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUE2REo7QUF6REU7RUFHRSxzQkFBQTtBQTRESjtBQTFERTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFHQSw4Q0FBQTtBQTZESjtBQTNERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUdBLHlCQUFBO0FBOERKO0FBNURFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUErREo7QUE3REU7RUFDRSxlQUFBO0FBZ0VKO0FBOURFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBaUVKO0FBL0RFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFHQSxvQkFBQTtBQWtFSiIsImZpbGUiOiJwaGFybWFjaWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzA5ZGJhZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyLmFjdGl2ZXtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxze1xyXG4gIGhlaWdodDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlscyBpe1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxzIC5sb2dvX25hbWV7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rc3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGl7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYS5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogIzFhYzdhMTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzExZGJiYTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGl7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhIC5saW5rc19uYW1le1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyAubG9nX291dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaG9tZS1zZWN0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbntcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2IC5zaWRlYmFyLWJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgbmF2IC5zaWRlYmFyLWJ1dHRvbiBpe1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAuc2VhcmNoLWJveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxuICBuYXYgLnNlYXJjaC1ib3ggaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0VGRUVGMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgbmF2IC5zZWFyY2gtYm94IC5ieC1zZWFyY2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwOWU0YjQ7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNCBlYXNlO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAucHJvZmlsZS1kZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0VGRUVGMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1pbi13aWR0aDogMTkwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAycHg7XHJcbiAgfVxyXG4gIG5hdiAucHJvZmlsZS1kZXRhaWxzIGltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIG5hdiAucHJvZmlsZS1kZXRhaWxzIC5hZG1pbl9uYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gLmhvbWUtY29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMDRweDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAub3ZlcnZpZXctYm94ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbiAgfVxyXG4gIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0IC0gMTVweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweCAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIH1cclxuICAub3ZlcnZpZXctYm94ZXMgLmJveC10b3BpY3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAubnVtYmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuaW5kaWNhdG9ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuaW5kaWNhdG9yIGl7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM4RkRBQ0I7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5ib3ggLmluZGljYXRvciBpLmRvd257XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTg3ZDg4O1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmluZGljYXRvciAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NlNWZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzY2YjBmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW46IC0xNXB4IDAgMCA2cHg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC50d297XHJcbiAgICAgY29sb3I6ICMyQkQ0N0Q7XHJcbiAgICAgYmFja2dyb3VuZDogI0MwRjJEODtcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC50aHJlZXtcclxuICAgICBjb2xvcjogI2ZmYzIzMztcclxuICAgICBiYWNrZ3JvdW5kOiAjZmZlOGIzO1xyXG4gICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0LmZvdXJ7XHJcbiAgICAgY29sb3I6ICNlMDUyNjA7XHJcbiAgICAgYmFja2dyb3VuZDogI2Y3ZDRkNztcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLnRvdGFsLW9yZGVye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLyogcGFkZGluZzogMCAyMHB4OyAqL1xyXG4gIH1cclxuICAvKiBsZWZ0IGJveCAqL1xyXG4gIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC5yZWNlbnQtc2FsZXN7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLmJveCAudGl0bGV7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxzIGxpLnRvcGlje1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxzIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlscyBsaSBhe1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDQwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5ib3ggLmJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b24gYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzBBMjU1ODtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b24gYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICAjMGRkNDg4O1xyXG4gIH1cclxuICBcclxuICAvKiBSaWdodCBib3ggKi9cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAudG9wLXNhbGVze1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgMjBweCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGkgYSBpbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGkgLnByb2R1Y3QsXHJcbiAgLnByaWNle1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAvKiBSZXNwb25zaXZlIE1lZGlhIFF1ZXJ5ICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNDBweCkge1xyXG4gICAgLnNpZGViYXJ7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIuYWN0aXZle1xyXG4gICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1zZWN0aW9ue1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9ue1xyXG4gICAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gMjIwcHgpOyAqL1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBsZWZ0OiAyMjBweDtcclxuICAgIH1cclxuICAgIC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyMHB4KTtcclxuICAgICAgbGVmdDogMjIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVze1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLmJveHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC50b3Atc2FsZXN7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLm92ZXJ2aWV3LWJveGVzIC5ib3h7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyIC0gMTVweCk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgbmF2IC5zaWRlYmFyLWJ1dHRvbiAuZGFzaGJvYXJkLFxyXG4gICAgbmF2IC5wcm9maWxlLWRldGFpbHMgLmFkbWluX25hbWUsXHJcbiAgICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpe1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtc2VjdGlvbiBuYXYgLnByb2ZpbGUtZGV0YWlsc3tcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlsc3tcclxuICAgICAgd2lkdGg6IDU2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb24gbmF2IC5wcm9maWxlLWRldGFpbHN7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIDpyb290IHtcclxuICAgIC0tYm9keS1iZzogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjdmYSAwJSwgI2MzY2ZlMiAxMDAlKTtcclxuICAgIC0tbXNnZXItYmc6ICNmZmY7XHJcbiAgICAtLWJvcmRlcjogMjNweCBzb2xpZCAjZGRkO1xyXG4gICAgLS1sZWZ0LW1zZy1iZzogI2VjZWNlYztcclxuICAgIC0tcmlnaHQtbXNnLWJnOiAjMjZmZjc5O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuTmVvbiB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG4gIC5OZW9uICoge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtZHJhZ0Ryb3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzQzcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgY29sb3I6ICM4ZDk0OTk7XHJcbiAgICBjb2xvcjogIzk3QTFBODtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI0M4Q0JDRTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LWRyYWdEcm9wIC5OZW9uLWlucHV0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAuTmVvbi1pbnB1dC10ZXh0IGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtdGV4dCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtY2hvb3NlLWJ0bi5ibHVlIHtcclxuICAgIGNvbG9yOiAjMDA4QkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOEJGRjtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtY2hvb3NlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzhkOTQ5NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "7wfR":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class PatientService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super('/patients', http);
    }
    deletePatient(_id, user_id) {
        return this.http.post(this.url + '/deletePatient', { _id: _id, user_id: user_id });
    }
    modifyPatient(patient) {
        return this.http.post(this.url + '/modifyPatient', patient);
    }
    addPatient(patient, user_id) {
        return this.http.post(this.url + '/addPatientToUser', Object.assign(Object.assign({}, patient), { user_id: user_id }));
    }
    getPatientsOfMalade(malade_id) {
        return this.http.get(this.url + '/getPatientsOfMalade?_id=' + malade_id);
    }
    getAllPatients(_id) {
        return this.http.get(this.url + '/getPatients?_id=' + _id);
    }
}
PatientService.ɵfac = function PatientService_Factory(t) { return new (t || PatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PatientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PatientService, factory: PatientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9U2B":
/*!**************************************************************!*\
  !*** ./src/app/modules/dashboard/biblio/biblio.component.ts ***!
  \**************************************************************/
/*! exports provided: BiblioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiblioComponent", function() { return BiblioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "eLR9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_text_resume_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/text-resume.pipe */ "+SuS");




function BiblioComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, file_r2.name, 30), "");
} }
class BiblioComponent {
    constructor() {
        this.files = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    FileSelected(event) {
        for (let i = 0; i < event.files.length; i++) {
            if (this.files.indexOf(event.files[i]) == -1)
                this.files.push(event.files[i]);
        }
    }
}
BiblioComponent.ɵfac = function BiblioComponent_Factory(t) { return new (t || BiblioComponent)(); };
BiblioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BiblioComponent, selectors: [["app-biblio"]], decls: 29, vars: 3, consts: [[1, "home-section"], [1, "sidebar-button"], [1, "dashboard"], [1, "profile-details"], ["alt", "", 3, "src"], [1, "admin_name"], [1, "bx", "bx-chevron-down"], [1, "home-content"], [1, "container"], [1, "row", "w-100", "px-5", "pb-4"], ["class", "card col-2 text-center d-block py-2", "style", "background-color: transparent; border: none", 4, "ngFor", "ngForOf"], [1, "Neon", "Neon-theme-dragdropbox"], ["accept", "application/pdf", "hidden", "", "multiple", "", "name", "files[]", "id", "filer_input2", "type", "file", 1, "file", 3, "change"], ["file", ""], [1, "Neon-input-dragDrop", 2, "max-width", "540px", 3, "click"], [1, "Neon-input-inner"], [1, "Neon-input-icon"], [1, "far", "fa-file-image"], [1, "Neon-input-text"], [2, "display", "inline-block", "margin", "15px 0"], [1, "Neon-input-choose-btn", "blue"], [1, "card", "col-2", "text-center", "d-block", "py-2", 2, "background-color", "transparent", "border", "none"], ["src", "../../../../assets/imgs/pdf.png", 2, "width", "100px!important"], [1, "card-body", "py-2"], [1, "card-title", "p-2"]], template: function BiblioComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Biblio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BiblioComponent_div_14_Template, 6, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BiblioComponent_Template_input_change_16_listener($event) { return ctx.FileSelected($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BiblioComponent_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Drag&Drop files here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Browse Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.photos[0].data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dr ", ctx.user.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_pipes_text_resume_pipe__WEBPACK_IMPORTED_MODULE_3__["TextResumePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 240px;\n  background: #09dbae;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: #fff;\n  min-width: 60px;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  height: 50px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: all 0.4s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #1ac7a1;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #11dbba;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: 60px;\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .log_out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f5f5f5;\n  min-height: 100vh;\n  width: calc(100% - 240px);\n  left: 240px;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  left: 60px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  width: calc(100% - 240px);\n  left: 240px;\n  z-index: 100;\n  padding: 0 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  left: 60px;\n  width: calc(100% - 60px);\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 10px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  max-width: 550px;\n  width: 100%;\n  margin: 0 20px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  font-size: 18px;\n  padding: 0 15px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background: #09e4b4;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 4px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  transition: all 0.4 ease;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  height: 50px;\n  min-width: 190px;\n  padding: 0 15px 0 2px;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 6px;\n  object-fit: cover;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  margin: 0 10px;\n  white-space: nowrap;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #333;\n}\n.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 104px;\n}\n.home-content[_ngcontent-%COMP%]   .overview-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  margin-bottom: 26px;\n}\n.overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: calc(100% / 4 - 15px);\n  background: #fff;\n  padding: 15px 14px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.overview-boxes[_ngcontent-%COMP%]   .box-topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 35px;\n  margin-top: -6px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background: #8FDACB;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 20px;\n  margin-right: 5px;\n}\n.box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i.down[_ngcontent-%COMP%] {\n  background: #e87d88;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  height: 50px;\n  width: 50px;\n  background: #cce5ff;\n  line-height: 50px;\n  text-align: center;\n  color: #66b0ff;\n  border-radius: 12px;\n  margin: -15px 0 0 6px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.two[_ngcontent-%COMP%] {\n  color: #2BD47D;\n  background: #C0F2D8;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.three[_ngcontent-%COMP%] {\n  color: #ffc233;\n  background: #ffe8b3;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.four[_ngcontent-%COMP%] {\n  color: #e05260;\n  background: #f7d4d7;\n}\n.home-content[_ngcontent-%COMP%]   .total-order[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  \n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .recent-sales[_ngcontent-%COMP%] {\n  width: 65%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  \n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li.topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n  font-size: 400;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #0A2558;\n  padding: 4px 12px;\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0dd488;\n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n  width: 35%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px 0 0;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin-right: 10px;\n  background: #333;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%], .price[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n  color: #333;\n}\n\n@media (max-width: 1240px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n    \n    overflow: hidden;\n    left: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 220px);\n    left: 220px;\n  }\n}\n@media (max-width: 1150px) {\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: scroll;\n    margin-bottom: 30px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 1000px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: calc(100% / 2 - 15px);\n    margin-bottom: 15px;\n  }\n}\n@media (max-width: 700px) {\n  nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    height: 50px;\n    min-width: 40px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n    width: 560px;\n  }\n}\n@media (max-width: 550px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  --msger-bg: #fff;\n  --border: 23px solid #ddd;\n  --left-msg-bg: #ececec;\n  --right-msg-bg: #26ff79;\n}\n.Neon[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #494949;\n  position: relative;\n}\n.Neon[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%] {\n  display: block;\n  width: 343px;\n  margin: 0 auto 25px auto;\n  padding: 25px;\n  color: #8d9499;\n  color: #97A1A8;\n  background: #fff;\n  border: 2px dashed #C8CBCE;\n  text-align: center;\n  transition: box-shadow 0.3s, border-color 0.3s;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%]   .Neon-input-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-top: -10px;\n  transition: all 0.3s ease;\n}\n.Neon-input-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n.Neon-input-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.Neon-input-choose-btn.blue[_ngcontent-%COMP%] {\n  color: #008BFF;\n  border: 1px solid #008BFF;\n}\n.Neon-input-choose-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 14px;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: bold;\n  color: #8d9496;\n  border-radius: 3px;\n  border: 1px solid #c6c6c6;\n  vertical-align: middle;\n  background-color: #fff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmlibGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlHQUFBO0FBQ1I7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUE7RUFDRSxXQUFBO0FBQ0Y7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdGO0FBREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTUY7QUFKQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQU9GO0FBTEE7RUFDRSxtQkFBQTtBQVFGO0FBTkE7RUFDRSxtQkFBQTtBQVNGO0FBUEE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVVGO0FBUkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFXRjtBQVRBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQVlGO0FBVEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQVlKO0FBVkU7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUFhSjtBQVhFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VB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RUE4REo7QUFDRjtBQTVERTtFQUNFO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBOERKOztFQTVERTtJQUNFLGFBQUE7RUErREo7QUFDRjtBQTVERTtFQUNFLDREQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUE4REo7QUExREU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUE2REo7QUF6REU7RUFHRSxzQkFBQTtBQTRESjtBQTFERTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFHQSw4Q0FBQTtBQTZESjtBQTNERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUdBLHlCQUFBO0FBOERKO0FBNURFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUErREo7QUE3REU7RUFDRSxlQUFBO0FBZ0VKO0FBOURFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBaUVKO0FBL0RFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFHQSxvQkFBQTtBQWtFSiIsImZpbGUiOiJiaWJsaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzA5ZGJhZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyLmFjdGl2ZXtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxze1xyXG4gIGhlaWdodDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlscyBpe1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxzIC5sb2dvX25hbWV7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rc3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGl7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYS5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogIzFhYzdhMTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzExZGJiYTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGl7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhIC5saW5rc19uYW1le1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyAubG9nX291dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaG9tZS1zZWN0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbntcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2IC5zaWRlYmFyLWJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgbmF2IC5zaWRlYmFyLWJ1dHRvbiBpe1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAuc2VhcmNoLWJveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxuICBuYXYgLnNlYXJjaC1ib3ggaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0VGRUVGMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgbmF2IC5zZWFyY2gtYm94IC5ieC1zZWFyY2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwOWU0YjQ7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNCBlYXNlO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAucHJvZmlsZS1kZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0VGRUVGMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1pbi13aWR0aDogMTkwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAycHg7XHJcbiAgfVxyXG4gIG5hdiAucHJvZmlsZS1kZXRhaWxzIGltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIG5hdiAucHJvZmlsZS1kZXRhaWxzIC5hZG1pbl9uYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gLmhvbWUtY29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMDRweDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAub3ZlcnZpZXctYm94ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbiAgfVxyXG4gIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0IC0gMTVweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweCAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIH1cclxuICAub3ZlcnZpZXctYm94ZXMgLmJveC10b3BpY3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAubnVtYmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuaW5kaWNhdG9ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuaW5kaWNhdG9yIGl7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM4RkRBQ0I7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5ib3ggLmluZGljYXRvciBpLmRvd257XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTg3ZDg4O1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmluZGljYXRvciAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NlNWZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzY2YjBmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW46IC0xNXB4IDAgMCA2cHg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC50d297XHJcbiAgICAgY29sb3I6ICMyQkQ0N0Q7XHJcbiAgICAgYmFja2dyb3VuZDogI0MwRjJEODtcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC50aHJlZXtcclxuICAgICBjb2xvcjogI2ZmYzIzMztcclxuICAgICBiYWNrZ3JvdW5kOiAjZmZlOGIzO1xyXG4gICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0LmZvdXJ7XHJcbiAgICAgY29sb3I6ICNlMDUyNjA7XHJcbiAgICAgYmFja2dyb3VuZDogI2Y3ZDRkNztcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLnRvdGFsLW9yZGVye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLyogcGFkZGluZzogMCAyMHB4OyAqL1xyXG4gIH1cclxuICAvKiBsZWZ0IGJveCAqL1xyXG4gIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC5yZWNlbnQtc2FsZXN7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLmJveCAudGl0bGV7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxzIGxpLnRvcGlje1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxzIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlscyBsaSBhe1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDQwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5ib3ggLmJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b24gYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzBBMjU1ODtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b24gYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICAjMGRkNDg4O1xyXG4gIH1cclxuICBcclxuICAvKiBSaWdodCBib3ggKi9cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAudG9wLXNhbGVze1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgMjBweCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGkgYSBpbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGkgLnByb2R1Y3QsXHJcbiAgLnByaWNle1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAvKiBSZXNwb25zaXZlIE1lZGlhIFF1ZXJ5ICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNDBweCkge1xyXG4gICAgLnNpZGViYXJ7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIuYWN0aXZle1xyXG4gICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1zZWN0aW9ue1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9ue1xyXG4gICAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gMjIwcHgpOyAqL1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBsZWZ0OiAyMjBweDtcclxuICAgIH1cclxuICAgIC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyMHB4KTtcclxuICAgICAgbGVmdDogMjIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVze1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLmJveHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC50b3Atc2FsZXN7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLm92ZXJ2aWV3LWJveGVzIC5ib3h7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyIC0gMTVweCk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgbmF2IC5zaWRlYmFyLWJ1dHRvbiAuZGFzaGJvYXJkLFxyXG4gICAgbmF2IC5wcm9maWxlLWRldGFpbHMgLmFkbWluX25hbWUsXHJcbiAgICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpe1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtc2VjdGlvbiBuYXYgLnByb2ZpbGUtZGV0YWlsc3tcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlsc3tcclxuICAgICAgd2lkdGg6IDU2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb24gbmF2IC5wcm9maWxlLWRldGFpbHN7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIDpyb290IHtcclxuICAgIC0tYm9keS1iZzogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjdmYSAwJSwgI2MzY2ZlMiAxMDAlKTtcclxuICAgIC0tbXNnZXItYmc6ICNmZmY7XHJcbiAgICAtLWJvcmRlcjogMjNweCBzb2xpZCAjZGRkO1xyXG4gICAgLS1sZWZ0LW1zZy1iZzogI2VjZWNlYztcclxuICAgIC0tcmlnaHQtbXNnLWJnOiAjMjZmZjc5O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuTmVvbiB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG4gIC5OZW9uICoge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtZHJhZ0Ryb3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzQzcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgY29sb3I6ICM4ZDk0OTk7XHJcbiAgICBjb2xvcjogIzk3QTFBODtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI0M4Q0JDRTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LWRyYWdEcm9wIC5OZW9uLWlucHV0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAuTmVvbi1pbnB1dC10ZXh0IGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtdGV4dCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtY2hvb3NlLWJ0bi5ibHVlIHtcclxuICAgIGNvbG9yOiAjMDA4QkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOEJGRjtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtY2hvb3NlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzhkOTQ5NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BI9a":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/traitement-malade/pdf/pdf.component.ts ***!
  \**************************************************************************/
/*! exports provided: PdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfComponent", function() { return PdfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2pdf.js */ "1n7x");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_1__);



class PdfComponent {
    constructor() {
        this.terminateDownload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        this.date = year + "/" + month + "/" + day;
        console.log(1);
        this.downloadPdf(document.querySelector('#html'));
    }
    downloadPdf(content) {
        const options = {
            filename: 'Rapport(' + new Date().toJSON().slice(0, 10) + ').pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait' },
            margin: 15,
        };
        //const child = content.childNodes[4].childNodes[3].childNodes[0];
        //content.childNodes[4].childNodes[3].removeChild(content.childNodes[4].childNodes[3].childNodes[0]);
        const wait = html2pdf_js__WEBPACK_IMPORTED_MODULE_1__().from(content).toImg().set(options).then((res) => {
            console.log(res);
            //content.childNodes[4].childNodes[3].appendChild(child);
            wait.save();
        });
        console.log(content);
    }
}
PdfComponent.ɵfac = function PdfComponent_Factory(t) { return new (t || PdfComponent)(); };
PdfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PdfComponent, selectors: [["app-pdf"]], inputs: { doctorName: "doctorName", patientName: "patientName", etat: "etat", maladeName: "maladeName" }, outputs: { terminateDownload: "terminateDownload" }, decls: 71, vars: 5, consts: [["id", "html", 0, "xmlns", "v", "urn:schemas-microsoft-com:vml", 0, "xmlns", "o", "urn:schemas-microsoft-com:office:office", 0, "xmlns", "w", "urn:schemas-microsoft-com:office:word", 0, "xmlns", "dt", "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882", 0, "xmlns", "m", "http://schemas.microsoft.com/office/2004/12/omml", "xmlns", "http://www.w3.org/TR/REC-html40"], ["http-equiv", "Content-Type", "content", "text/html; charset=windows-1252"], ["name", "ProgId", "content", "Word.Document"], ["name", "Generator", "content", "Microsoft Word 15"], ["name", "Originator", "content", "Microsoft Word 15"], ["rel", "File-List", "href", "Rap_fichiers/filelist.xml"], ["rel", "Edit-Time-Data", "href", "Rap_fichiers/editdata.mso"], ["rel", "themeData", "href", "../../../../../assets/Rap_fichiers/themedata.thmx"], ["rel", "colorSchemeMapping", "href", "../../../../../assets/Rap_fichiers/colorschememapping.xml"], ["lang", "FR", 2, "tab-interval", "36.0pt"], [1, "WordSection1"], [1, "MsoBodyText"], [2, "font-size", "10.0pt", "mso-bidi-font-size", "28.0pt", "font-family", "\"Times New Roman\",serif", "mso-hansi-font-family", "Calibri", "mso-bidi-font-family", "Calibri"], [1, "MsoBodyText", 2, "margin-top", ".2pt", "margin-right", "0cm", "margin-bottom", ".05pt", "margin-left", "0cm"], [2, "font-size", "12.0pt", "mso-bidi-font-size", "28.0pt", "font-family", "\"Times New Roman\",serif", "mso-hansi-font-family", "Calibri", "mso-bidi-font-family", "Calibri"], [1, "MsoBodyText", 2, "margin-left", "21.3pt"], [2, "font-size", "10.0pt", "mso-bidi-font-size", "28.0pt", "font-family", "\"Times New Roman\",serif", "mso-hansi-font-family", "Calibri", "mso-bidi-font-family", "Calibri", "mso-fareast-language", "FR", "mso-no-proof", "yes"], ["width", "107", "height", "55", "src", "../../../../../assets/Rap_fichiers/image001.png", 0, "v", "shapes", "image1.png"], [2, "margin-left", "12.05pt", "line-height", "33.5pt", "mso-line-height-rule", "exactly", "tab-stops", "125.45pt"], ["align", "left", 2, "text-align", "left", "line-height", "33.55pt", "mso-line-height-rule", "exactly"], [1, "MsoBodyText", 2, "margin-top", "10.7pt", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "5.8pt", "margin-bottom", ".0001pt", "line-height", "107%"], [2, "mso-ignore", "vglayout"], ["cellpadding", "0", "cellspacing", "0", "align", "left"], ["width", "471", "height", "0"], ["width", "55", "height", "29", "src", "../../../../../assets/Rap_fichiers/image004.gif", 0, "v", "shapes", "image2.png"], [1, "MsoBodyText", 2, "margin-top", ".55pt"], [2, "font-size", "32.5pt", "mso-bidi-font-size", "28.0pt"], [1, "MsoNormal", 2, "margin-left", "272.85pt"], [2, "font-size", "12.0pt", "mso-bidi-font-size", "11.0pt", "font-family", "\"Times New Roman\",serif", "mso-hansi-font-family", "Calibri", "mso-bidi-font-family", "Calibri", "color", "#1F2023"], [2, "letter-spacing", "-.1pt"], [1, "SpellE"], [2, "font-size", "12.0pt", "mso-bidi-font-size", "11.0pt", "font-family", "\"Times New Roman\",serif", "mso-hansi-font-family", "Calibri", "mso-bidi-font-family", "Calibri"], [1, "MsoBodyTex"], [1, "MsoBodyText", 2, "margin-top", "21.4pt", "margin-right", "0cm", "margin-bottom", "0cm", "margin-left", "12.15pt", "margin-bottom", ".0001pt"], [2, "letter-spacing", "-.15pt"]], template: function PdfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "body", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CONCLUSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\nSignature: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Dr ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rapport de maladie de Cancer de ", ctx.maladeName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gr\u00E2ce \u00E0 la\ntomographie et aux images de surface\nprises par infrarouge, qui sont entre les mains du patient ", ctx.patientName, " et en analysant ces r\u00E9sultats. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Le test est ", ctx.etat ? "Positif" : "Negatif", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Le ", ctx.date, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctorName);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZGYuY29tcG9uZW50LnNjc3MifQ== */", "<!--[_ngcontent-%COMP%]   @font-face[_ngcontent-%COMP%]\n\t{font-family:\"Cambria Math\";\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;\n\tmso-font-charset:1;\n\tmso-generic-font-family:roman;\n\tmso-font-format:other;\n\tmso-font-pitch:variable;\n\tmso-font-signature:0 0 0 0 0 0;}\n@font-face\n\t{font-family:Calibri;\n\tpanose-1:2 15 5 2 2 2 4 3 2 4;\n\tmso-font-charset:0;\n\tmso-generic-font-family:swiss;\n\tmso-font-pitch:variable;\n\tmso-font-signature:-469750017 -1073732485 9 0 511 0;}\n \n p.MsoNormal[_ngcontent-%COMP%], li.MsoNormal[_ngcontent-%COMP%], div.MsoNormal[_ngcontent-%COMP%]\n\t{mso-style-priority:1;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-parent:\"\";\n\tmargin:0cm;\n\tmargin-bottom:.0001pt;\n\tmso-pagination:none;\n\ttext-autospace:none;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-language:EN-US;}\nh1[_ngcontent-%COMP%]\n\t{mso-style-priority:1;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmargin-top:0cm;\n\tmargin-right:0cm;\n\tmargin-bottom:0cm;\n\tmargin-left:5.8pt;\n\tmargin-bottom:.0001pt;\n\ttext-align:center;\n\tmso-pagination:none;\n\tmso-outline-level:1;\n\ttext-autospace:none;\n\tfont-size:28.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-fareast-font-family:Calibri;\n\tmso-font-kerning:0pt;\n\tmso-fareast-language:EN-US;}\np.MsoBodyText[_ngcontent-%COMP%], li.MsoBodyText[_ngcontent-%COMP%], div.MsoBodyText[_ngcontent-%COMP%]\n\t{mso-style-priority:1;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmargin:0cm;\n\tmargin-bottom:.0001pt;\n\tmso-pagination:none;\n\ttext-autospace:none;\n\tfont-size:28.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-language:EN-US;}\np.MsoListParagraph[_ngcontent-%COMP%], li.MsoListParagraph[_ngcontent-%COMP%], div.MsoListParagraph[_ngcontent-%COMP%]\n\t{mso-style-priority:1;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmargin:0cm;\n\tmargin-bottom:.0001pt;\n\tmso-pagination:none;\n\ttext-autospace:none;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-language:EN-US;}\np.TableParagraph[_ngcontent-%COMP%], li.TableParagraph[_ngcontent-%COMP%], div.TableParagraph[_ngcontent-%COMP%]\n\t{mso-style-name:\"Table Paragraph\";\n\tmso-style-priority:1;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmargin:0cm;\n\tmargin-bottom:.0001pt;\n\tmso-pagination:none;\n\ttext-autospace:none;\n\tfont-size:11.0pt;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-language:EN-US;}\nspan.SpellE[_ngcontent-%COMP%]\n\t{mso-style-name:\"\";\n\tmso-spl-e:yes;}\nspan.GramE[_ngcontent-%COMP%]\n\t{mso-style-name:\"\";\n\tmso-gram-e:yes;}\n.MsoChpDefault[_ngcontent-%COMP%]\n\t{mso-style-type:export-only;\n\tmso-default-props:yes;\n\tfont-family:\"Calibri\",sans-serif;\n\tmso-ascii-font-family:Calibri;\n\tmso-ascii-theme-font:minor-latin;\n\tmso-fareast-font-family:Calibri;\n\tmso-fareast-theme-font:minor-latin;\n\tmso-hansi-font-family:Calibri;\n\tmso-hansi-theme-font:minor-latin;\n\tmso-bidi-font-family:Arial;\n\tmso-bidi-theme-font:minor-bidi;\n\tmso-ansi-language:EN-US;\n\tmso-fareast-language:EN-US;}\n.MsoPapDefault[_ngcontent-%COMP%]\n\t{mso-style-type:export-only;\n\tmso-pagination:none;\n\ttext-autospace:none;}\n@page WordSection1\n\t{size[_ngcontent-%COMP%]:595.5pt   842.0pt[_ngcontent-%COMP%];\n\tmargin[_ngcontent-%COMP%]:79.0pt   77.0pt[_ngcontent-%COMP%]   14.0pt[_ngcontent-%COMP%]   65.0pt[_ngcontent-%COMP%];\n\tmso-header-margin[_ngcontent-%COMP%]:36.0pt;\n\tmso-footer-margin[_ngcontent-%COMP%]:36.0pt;\n\tmso-paper-source[_ngcontent-%COMP%]:0;}\ndiv.WordSection1[_ngcontent-%COMP%]\n\t{page:WordSection1;}\n-->"] });


/***/ }),

/***/ "DDT9":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/team/team.component.ts ***!
  \**********************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/user.service */ "qfBg");
/* harmony import */ var _services_infermerie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/infermerie.service */ "xaqL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "eLR9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.component */ "dAdV");






function TeamComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamComponent_tr_44_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const infermerie_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r4.infermerieEdit = infermerie_r2; return ctx_r4.addInfermerie = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\uE254");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamComponent_tr_44_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const infermerie_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r6.infermerieDeleted = infermerie_r2; return ctx_r6.addInfermerie = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\uE872");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const infermerie_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", index_r3 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", infermerie_r2.nom + " " + infermerie_r2.prenom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](infermerie_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](infermerie_r2.phone);
} }
function TeamComponent_app_modal_45_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveModel", function TeamComponent_app_modal_45_Template_app_modal_saveModel_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.save($event); })("deleteElement", function TeamComponent_app_modal_45_Template_app_modal_deleteElement_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteP(); })("closeModel", function TeamComponent_app_modal_45_Template_app_modal_closeModel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addInfermerie = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementDeleted", ctx_r1.infermerieDeleted)("type", "infermerie")("element", ctx_r1.infermerieEdit);
} }
class TeamComponent {
    constructor(userService, infermerieService) {
        this.userService = userService;
        this.infermerieService = infermerieService;
        this.addInfermerie = false;
        this.infermeris = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.getInfermeris();
    }
    getInfermeris() {
        this.userService.getAlls(this.user._id)
            .subscribe((resp) => {
            //this.patients = resp.patients;
            this.infermeris = resp.infermeris;
        });
    }
    save(infermerie) {
        if (infermerie._id) {
            this.infermerieService.modifyInfermerie(infermerie).
                subscribe((resp) => {
                console.log(resp);
                const index = this.infermeris.findIndex(pat => pat._id == infermerie._id);
                this.infermeris[index] = infermerie;
            });
        }
        else {
            this.infermerieService.addInfermerie(infermerie, this.user._id).
                subscribe((resp) => {
                console.log(resp);
                this.infermeris.push(infermerie);
            });
        }
    }
    deleteP() {
        this.infermerieService.deleteInfermerie(this.infermerieDeleted._id, this.user._id)
            .subscribe((resp) => {
            const index = this.infermeris.findIndex(infermerie => infermerie == this.infermerieDeleted);
            this.infermeris.splice(index, 1);
        });
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_infermerie_service__WEBPACK_IMPORTED_MODULE_2__["InfermerieService"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 46, vars: 4, consts: [["rel", "stylesheet", "href", "https://fonts.googleapis.com/css?family=Roboto|Varela+Round"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/icon?family=Material+Icons"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "home-section"], [1, "sidebar-button"], [1, "dashboard"], [1, "profile-details"], ["alt", "", 3, "src"], [1, "admin_name"], [1, "bx", "bx-chevron-down"], [1, "home-content"], [1, "container"], [1, "table-wrapper"], [1, "table-title"], [1, "row"], [1, "col-sm-6"], [1, "btn", "btn-success", "p-2", 3, "click"], [1, "material-icons"], [1, "table", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], [3, "elementDeleted", "type", "element", "saveModel", "deleteElement", "closeModel", 4, "ngIf"], [1, "edit", "cursor-pointer", 3, "click"], ["data-toggle", "tooltip", "title", "Edit", 1, "material-icons"], [1, "delete", 3, "click"], ["data-toggle", "tooltip", "title", "Delete", 1, "material-icons", "cursor-pointer"], [3, "elementDeleted", "type", "element", "saveModel", "deleteElement", "closeModel"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Infermeris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamComponent_Template_a_click_25_listener() { ctx.addInfermerie = true; return ctx.infermerieEdit = undefined; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\uE147");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Add New Infermerie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TeamComponent_tr_44_Template, 16, 4, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TeamComponent_app_modal_45_Template, 1, 3, "app-modal", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.photos[0].data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dr ", ctx.user.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.infermeris);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addInfermerie);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 240px;\n  background: #09dbae;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: #fff;\n  min-width: 60px;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  height: 50px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: all 0.4s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #1ac7a1;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #11dbba;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: 60px;\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .log_out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f5f5f5;\n  min-height: 100vh;\n  width: calc(100% - 240px);\n  left: 240px;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  left: 60px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  width: calc(100% - 240px);\n  left: 240px;\n  z-index: 100;\n  padding: 0 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  left: 60px;\n  width: calc(100% - 60px);\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 10px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  max-width: 550px;\n  width: 100%;\n  margin: 0 20px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  font-size: 18px;\n  padding: 0 15px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background: #09e4b4;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 4px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  transition: all 0.4 ease;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  height: 50px;\n  min-width: 190px;\n  padding: 0 15px 0 2px;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 6px;\n  object-fit: cover;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  margin: 0 10px;\n  white-space: nowrap;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #333;\n}\n.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 104px;\n}\n.home-content[_ngcontent-%COMP%]   .overview-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  margin-bottom: 26px;\n}\nbody[_ngcontent-%COMP%] {\n  color: #566787;\n  background: #f5f5f5;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 13px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px 25px;\n  margin: 30px 0;\n  border-radius: 1px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  color: #fff;\n  padding: 16px 30px;\n  margin: -20px -25px 10px;\n  border-radius: 1px 1px 0 0;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 24px;\n}\n.table-title[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  float: right;\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #fff;\n  float: right;\n  font-size: 13px;\n  border: none;\n  min-width: 50px;\n  border-radius: 1px;\n  border: none;\n  outline: none !important;\n  margin-left: 10px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 21px;\n  margin-right: 5px;\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 2px;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-color: #e9e9e9;\n  padding: 12px 15px;\n  vertical-align: middle;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 60px;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 100px;\n}\ntable.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background-color: #fcfcfc;\n}\ntable.table-striped.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0 5px;\n  cursor: pointer;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   i[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  font-size: 22px;\n  margin: 0 5px;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #566787;\n  display: inline-block;\n  text-decoration: none;\n  outline: none !important;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2196F3;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.edit[_ngcontent-%COMP%] {\n  color: #FFC107;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.delete[_ngcontent-%COMP%] {\n  color: #F44336;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\ntable.table[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.pagination[_ngcontent-%COMP%] {\n  float: right;\n  margin: 0 0 5px;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 13px;\n  min-width: 30px;\n  min-height: 30px;\n  color: #999;\n  margin: 0 2px;\n  line-height: 30px;\n  border-radius: 1px !important;\n  text-align: center;\n  padding: 0 6px;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a.page-link[_ngcontent-%COMP%] {\n  background: #03A9F4;\n}\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0397d6;\n}\n.pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-top: 6px;\n}\n.hint-text[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.custom-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  margin: 5px 0 0 3px;\n  z-index: 9;\n}\n.custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  width: 18px;\n  height: 18px;\n}\n.custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  content: \"\";\n  margin-right: 10px;\n  display: inline-block;\n  vertical-align: text-top;\n  background: white;\n  border: 1px solid #bbb;\n  border-radius: 1px;\n  box-sizing: border-box;\n  z-index: 2;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 6px;\n  top: 3px;\n  width: 6px;\n  height: 11px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: inherit;\n  z-index: 3;\n  transform: rotateZ(45deg);\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  border-color: #03A9F4;\n  background: #03A9F4;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  border-color: #fff;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%]:before {\n  color: #b8b8b8;\n  cursor: auto;\n  box-shadow: none;\n  background: #ddd;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 1px;\n}\n.modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  background: #ecf0f1;\n  border-radius: 0 0 1px 1px;\n}\n.modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.modal[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  box-shadow: none;\n  border-color: #dddddd;\n}\n.modal[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.modal[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  min-width: 100px;\n}\n.modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5R0FBQTtBQUNSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlGO0FBRkE7RUFDRSxnQkFBQTtBQUtGO0FBSEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQU1GO0FBSkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFPRjtBQUxBO0VBQ0UsbUJBQUE7QUFRRjtBQU5BO0VBQ0UsbUJBQUE7QUFTRjtBQVBBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFVRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBV0Y7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFZRjtBQVRBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFZSjtBQVZFO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0FBYUo7QUFYRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNB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LGtCQUFBO0VBQ0EsZ0JBQUE7QUF1RUE7QUFyRUE7RUFDQSxtQkFBQTtBQXdFQSIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5zaWRlYmFye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwOWRiYWU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG4uc2lkZWJhci5hY3RpdmV7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlsc3tcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zaWRlYmFyIC5sb2dvLWRldGFpbHMgaXtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlscyAubG9nb19uYW1le1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3N7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGF7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGEuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICMxYWM3YTE7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICMxMWRiYmE7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBpe1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYSAubGlua3NfbmFtZXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgLmxvZ19vdXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvbWUtc2VjdGlvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgfVxyXG4gIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb257XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjQwcHgpO1xyXG4gICAgbGVmdDogMjQwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbiBuYXZ7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAuc2lkZWJhci1idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIG5hdiAuc2lkZWJhci1idXR0b24gaXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmhvbWUtc2VjdGlvbiBuYXYgLnNlYXJjaC1ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICB9XHJcbiAgbmF2IC5zZWFyY2gtYm94IGlucHV0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjZGQTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFRkVFRjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG4gIG5hdiAuc2VhcmNoLWJveCAuYngtc2VhcmNoe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDllNGI0O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjQgZWFzZTtcclxuICB9XHJcbiAgLmhvbWUtc2VjdGlvbiBuYXYgLnByb2ZpbGUtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjZGQTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFRkVFRjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE5MHB4O1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgMnB4O1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyAuYWRtaW5fbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgbmF2IC5wcm9maWxlLWRldGFpbHMgaXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIC5ob21lLWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTA0cHg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLm92ZXJ2aWV3LWJveGVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGNvbG9yOiAjNTY2Nzg3O1xyXG5iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG5mb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4udGFibGUtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbmJvcmRlci1yYWRpdXM6MXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNDcpO1xyXG59XHJcbi50YWJsZS10aXRsZSB7ICAgICAgICBcclxucGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZmZmO1xyXG5wYWRkaW5nOiAxNnB4IDMwcHg7XHJcbm1hcmdpbjogLTIwcHggLTI1cHggMTBweDtcclxuYm9yZGVyLXJhZGl1czogMXB4IDFweCAwIDA7XHJcbmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQ3KTtcclxufVxyXG4udGFibGUtdGl0bGUgaDIge1xyXG5tYXJnaW46IDVweCAwIDA7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4udGFibGUtdGl0bGUgLmJ0bi1ncm91cCB7XHJcbmZsb2F0OiByaWdodDtcclxufVxyXG4udGFibGUtdGl0bGUgLmJ0biB7XHJcbmNvbG9yOiAjZmZmO1xyXG5mbG9hdDogcmlnaHQ7XHJcbmZvbnQtc2l6ZTogMTNweDtcclxuYm9yZGVyOiBub25lO1xyXG5taW4td2lkdGg6IDUwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDFweDtcclxuYm9yZGVyOiBub25lO1xyXG5vdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI0Nyk7XHJcbn1cclxuLnRhYmxlLXRpdGxlIC5idG4gaSB7XHJcbmZsb2F0OiBsZWZ0O1xyXG5mb250LXNpemU6IDIxcHg7XHJcbm1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi50YWJsZS10aXRsZSAuYnRuIHNwYW4ge1xyXG5mbG9hdDogbGVmdDtcclxubWFyZ2luLXRvcDogMnB4O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRyIHRoLCB0YWJsZS50YWJsZSB0ciB0ZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlOWU5ZTk7XHJcbnBhZGRpbmc6IDEycHggMTVweDtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG50YWJsZS50YWJsZSB0ciB0aDpmaXJzdC1jaGlsZCB7XHJcbndpZHRoOiA2MHB4O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRyIHRoOmxhc3QtY2hpbGQge1xyXG53aWR0aDogMTAwcHg7XHJcbn1cclxudGFibGUudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbn1cclxudGFibGUudGFibGUtc3RyaXBlZC50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XHJcbmJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxudGFibGUudGFibGUgdGggaSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IFxyXG50YWJsZS50YWJsZSB0ZDpsYXN0LWNoaWxkIGkge1xyXG5vcGFjaXR5OiAwLjk7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbn1cclxudGFibGUudGFibGUgdGQgYSB7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5jb2xvcjogIzU2Njc4NztcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbm91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBhOmhvdmVyIHtcclxuY29sb3I6ICMyMTk2RjM7XHJcbn1cclxudGFibGUudGFibGUgdGQgYS5lZGl0IHtcclxuICAgIGNvbG9yOiAjRkZDMTA3O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGEuZGVsZXRlIHtcclxuICAgIGNvbG9yOiAjRjQ0MzM2O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGkge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcbnRhYmxlLnRhYmxlIC5hdmF0YXIge1xyXG5ib3JkZXItcmFkaXVzOiAxcHg7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbm1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDAgMCA1cHg7XHJcbn1cclxuLnBhZ2luYXRpb24gbGkgYSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG59XHJcbi5wYWdpbmF0aW9uIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn0gXHJcbi5wYWdpbmF0aW9uIGxpLmFjdGl2ZSBhLCAucGFnaW5hdGlvbiBsaS5hY3RpdmUgYS5wYWdlLWxpbmsge1xyXG4gICAgYmFja2dyb3VuZDogIzAzQTlGNDtcclxufVxyXG4ucGFnaW5hdGlvbiBsaS5hY3RpdmUgYTpob3ZlciB7ICAgICAgICBcclxuICAgIGJhY2tncm91bmQ6ICMwMzk3ZDY7XHJcbn1cclxuLnBhZ2luYXRpb24gbGkuZGlzYWJsZWQgaSB7XHJcbiAgICBjb2xvcjogI2NjYztcclxufVxyXG4ucGFnaW5hdGlvbiBsaSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHhcclxufVxyXG4uaGludC10ZXh0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufSAgICBcclxuLyogQ3VzdG9tIGNoZWNrYm94ICovXHJcbi5jdXN0b20tY2hlY2tib3gge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0geyAgICBcclxub3BhY2l0eTogMDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5tYXJnaW46IDVweCAwIDAgM3B4O1xyXG56LWluZGV4OiA5O1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggbGFiZWw6YmVmb3Jle1xyXG53aWR0aDogMThweDtcclxuaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcclxuY29udGVudDogJyc7XHJcbm1hcmdpbi1yaWdodDogMTBweDtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG52ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbmJhY2tncm91bmQ6IHdoaXRlO1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xyXG5ib3JkZXItcmFkaXVzOiAxcHg7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbnotaW5kZXg6IDI7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuY29udGVudDogJyc7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogNnB4O1xyXG50b3A6IDNweDtcclxud2lkdGg6IDZweDtcclxuaGVpZ2h0OiAxMXB4O1xyXG5ib3JkZXI6IHNvbGlkICMwMDA7XHJcbmJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbnRyYW5zZm9ybTogaW5oZXJpdDtcclxuei1pbmRleDogMztcclxudHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxufVxyXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuYm9yZGVyLWNvbG9yOiAjMDNBOUY0O1xyXG5iYWNrZ3JvdW5kOiAjMDNBOUY0O1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbmJvcmRlci1jb2xvcjogI2ZmZjtcclxufVxyXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCArIGxhYmVsOmJlZm9yZSB7XHJcbmNvbG9yOiAjYjhiOGI4O1xyXG5jdXJzb3I6IGF1dG87XHJcbmJveC1zaGFkb3c6IG5vbmU7XHJcbmJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuLyogTW9kYWwgc3R5bGVzICovXHJcbi5tb2RhbCAubW9kYWwtZGlhbG9nIHtcclxubWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG4ubW9kYWwgLm1vZGFsLWhlYWRlciwgLm1vZGFsIC5tb2RhbC1ib2R5LCAubW9kYWwgLm1vZGFsLWZvb3RlciB7XHJcbnBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG5ib3JkZXItcmFkaXVzOiAxcHg7XHJcbn1cclxuLm1vZGFsIC5tb2RhbC1mb290ZXIge1xyXG5iYWNrZ3JvdW5kOiAjZWNmMGYxO1xyXG5ib3JkZXItcmFkaXVzOiAwIDAgMXB4IDFweDtcclxufVxyXG4ubW9kYWwgLm1vZGFsLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubW9kYWwgLmZvcm0tY29udHJvbCB7XHJcbmJvcmRlci1yYWRpdXM6IDFweDtcclxuYm94LXNoYWRvdzogbm9uZTtcclxuYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xyXG59XHJcbi5tb2RhbCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG5yZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcbi5tb2RhbCAuYnRuIHtcclxuYm9yZGVyLXJhZGl1czogMXB4O1xyXG5taW4td2lkdGg6IDEwMHB4O1xyXG59IFxyXG4ubW9kYWwgZm9ybSBsYWJlbCB7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn0gIl19 */"] });


/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");


class LoginService {
    constructor(http) {
        this.http = http;
        this.options = {
            uri: 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&recognitionModel=recognition_04&returnRecognitionModel=false&detectionModel=detection_03&faceIdTimeToLive=86400',
            verifyUri: 'https://eastus.api.cognitive.microsoft.com/face/v1.0/verify',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Ocp-Apim-Subscription-Key': '31024abd20e841c1b747ed349eebf23c'
            }
        };
        // url = 'http://localhost:5000/api/users/';
        this.url = 'https://testingprojectmedicalement.herokuapp.com/api/users';
    }
    upload(blob) {
        return this.http.post(this.options.uri, blob, {
            headers: this.options.headers
        });
    }
    signin(email, password) {
        return this.http.post(this.url + 'signin', { email, password });
    }
    signup(user) {
        const userFormData = new FormData();
        const keys = Object.keys(user);
        keys.map((key) => {
            if (key == 'photos') {
                user[key].map((photo) => {
                    userFormData.append('files', photo, photo.name);
                });
            }
            else {
                userFormData.append(key, user[key]);
            }
        });
        return this.http.post(this.url + 'signup', userFormData);
    }
    detectFaceByCamera(blob) {
        return this.http.post(this.options.uri, blob, {
            headers: this.options.headers
        });
    }
    signinByCamera(faceIds) {
        return this.http.post(this.url + 'signinByCamera', { faceIds: faceIds });
    }
    getToken() {
        return localStorage.getItem('token');
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _errors_AppError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../errors/AppError */ "6/22");
/* harmony import */ var _errors_BadRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../errors/BadRequest */ "7iTU");
/* harmony import */ var _errors_NotFoundError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../errors/NotFoundError */ "JVYz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class DataService {
    constructor(url, http) {
        this.http = http;
        // url = 'http://localhost:5000/api';
        this.url = 'https://testingprojectmedicalement.herokuapp.com/api';
        this.url += url;
        this.setToken();
    }
    getAll(_id) {
        let url;
        if (_id)
            url = this.url + '?_id=' + _id;
        else
            url = this.url;
        return this.http.get(url, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    get(_id) {
        // console.log(this.url + '/' + id)
        return this.http.get(this.url + _id, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    create(data) {
        return this.http.post(this.url, data, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    update(id, data) {
        return this.http.put(this.url + '/' + id, data, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    delete(id) {
        return this.http.delete(this.url + '/' + id, this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    setToken() {
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                Authorization: 'Bearer ' + localStorage.getItem('steno-token')
            })
        };
        DataService.static_header = this.header;
    }
    handleError(error) {
        console.log(error);
        if (error.status === 404) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_NotFoundError__WEBPACK_IMPORTED_MODULE_2__["NotFoundError"]());
        }
        if (error.status === 400) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_BadRequest__WEBPACK_IMPORTED_MODULE_1__["BadRequest"]());
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_AppError__WEBPACK_IMPORTED_MODULE_0__["AppError"]());
    }
}
DataService.static_header = {};
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"]('string'), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JVYz":
/*!*****************************************!*\
  !*** ./src/app/errors/NotFoundError.ts ***!
  \*****************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _AppError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppError */ "6/22");

class NotFoundError extends _AppError__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "M95H":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-content/home-content.component */ "sMYi");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 1, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-content");
    } }, directives: [_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_1__["HomeContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "OzS6":
/*!***********************************!*\
  !*** ./src/models/OutputChats.ts ***!
  \***********************************/
/*! exports provided: OutputChats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputChats", function() { return OutputChats; });
/* harmony import */ var _ConstantChats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConstantChats */ "0HXt");

class OutputChats {
    output(input) {
        const constant = new _ConstantChats__WEBPACK_IMPORTED_MODULE_0__["ConstantChats"]();
        let product;
        let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
        text = text
            .replace(/ a /g, " ") // 'tell me a story' -> 'tell me story'
            .replace(/i feel /g, "")
            .replace(/whats/g, "what is")
            .replace(/please /g, "")
            .replace(/ please/g, "")
            .replace(/r u/g, "are you");
        if (this.compare(constant.prompts, constant.replies, text)) {
            // Search for exact match in `prompts`
            product = this.compare(constant.prompts, constant.replies, text);
        }
        else if (text.match(/thank/gi)) {
            product = "You're welcome!";
        }
        else if (text.match(/(corona|covid|virus)/gi)) {
            // If no match, check if message contains `coronavirus`
            product = constant.coronavirus[Math.floor(Math.random() * constant.coronavirus.length)];
        }
        else {
            // If all else fails: random alternative
            product = constant.alternative[Math.floor(Math.random() * constant.alternative.length)];
        }
        // Update DOM
        return product;
    }
    compare(promptsArray, repliesArray, string) {
        let reply;
        let replyFound = false;
        for (let x = 0; x < promptsArray.length; x++) {
            for (let y = 0; y < promptsArray[x].length; y++) {
                if (promptsArray[x][y] === string) {
                    let replies = repliesArray[x];
                    reply = replies[Math.floor(Math.random() * replies.length)];
                    replyFound = true;
                    // Stop inner loop when input value matches prompts
                    break;
                }
            }
            if (replyFound) {
                // Stop outer loop when reply is found instead of interating through the entire array
                break;
            }
        }
        return reply;
    }
}


/***/ }),

/***/ "RY/o":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(nom, prenom, email, password, specialisation, nomClinique, adresseClinique) {
        this.photos = [];
        this.faceIds = [];
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.specialisation = specialisation;
        this.nom_Clinique = nomClinique;
        this.adresseClinique = adresseClinique;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'app';
        this.birthday = 'Resume pipe';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('token'))
            return true;
        this.router.navigateByUrl('/login');
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XF2g":
/*!****************************************************************!*\
  !*** ./src/app/modules/dashboard/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/user.service */ "qfBg");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "eLR9");



class ProfileComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 56, vars: 11, consts: [[1, "home-section"], [1, "sidebar-button"], [1, "dashboard"], [1, "profile-details"], ["alt", "", 3, "src"], [1, "admin_name"], [1, "bx", "bx-chevron-down"], [1, "home-content"], [1, "container", "rounded", "bg-white", "mt-5", "mb-5"], [1, "row"], [1, "col-md-3", "border-right"], [1, "d-flex", "flex-column", "align-items-center", "text-center", "py-5"], ["width", "150px", 1, "rounded-circle", "mt-5", 3, "src"], [1, "font-weight-bold"], [1, "text-black-50"], [1, "col-md-5", "border-right"], [1, "p-3", "py-5"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-right"], [1, "row", "mt-2"], [1, "col-md-6", "px-2"], [1, "labels"], ["type", "text", "placeholder", "nom", 1, "form-control", "p-2", "px-3", 3, "value"], ["type", "text", "placeholder", "prenom", 1, "form-control", "p-2", "px-3", 3, "value"], [1, "row", "mt-3"], [1, "col-md-12"], ["type", "text", "placeholder", "Nom clinique", 1, "form-control", "p-2", "px-3", 3, "value"], ["type", "text", "placeholder", "address clinique", 1, "form-control", "p-2", "px-3", 3, "value"], ["type", "text", "placeholder", "specialisation", 1, "form-control", "p-2", "px-3", 3, "value"], ["type", "text", "placeholder", "enter email id", 1, "form-control", "py-2", "px-3", 3, "value"], [1, "mt-4", "text-center"], ["type", "button", 1, "btn", "btn-primary", "profile-button", "w-100", "py-2"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Profile Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Prenom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Nom Clinique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "adresse Clinique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "specialisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Save Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.photos[0].data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dr ", ctx.user.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.photos[0].data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.nom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.nom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.prenom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.nom_Clinique);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.adresseClinique);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.specialisation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.email);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 240px;\n  background: #09dbae;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: #fff;\n  min-width: 60px;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  height: 50px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: all 0.4s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #1ac7a1;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #11dbba;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: 60px;\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .log_out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f5f5f5;\n  min-height: 100vh;\n  width: calc(100% - 240px);\n  left: 240px;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  left: 60px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  width: calc(100% - 240px);\n  left: 240px;\n  z-index: 100;\n  padding: 0 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  left: 60px;\n  width: calc(100% - 60px);\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 10px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  max-width: 550px;\n  width: 100%;\n  margin: 0 20px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  font-size: 18px;\n  padding: 0 15px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background: #09e4b4;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 4px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  transition: all 0.4 ease;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  height: 50px;\n  min-width: 190px;\n  padding: 0 15px 0 2px;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 6px;\n  object-fit: cover;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  margin: 0 10px;\n  white-space: nowrap;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #333;\n}\n.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 104px;\n}\n.home-content[_ngcontent-%COMP%]   .overview-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  margin-bottom: 26px;\n}\n.overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: calc(100% / 4 - 15px);\n  background: #fff;\n  padding: 15px 14px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.overview-boxes[_ngcontent-%COMP%]   .box-topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 35px;\n  margin-top: -6px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background: #8FDACB;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 20px;\n  margin-right: 5px;\n}\n.box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i.down[_ngcontent-%COMP%] {\n  background: #e87d88;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  height: 50px;\n  width: 50px;\n  background: #cce5ff;\n  line-height: 50px;\n  text-align: center;\n  color: #66b0ff;\n  border-radius: 12px;\n  margin: -15px 0 0 6px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.two[_ngcontent-%COMP%] {\n  color: #2BD47D;\n  background: #C0F2D8;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.three[_ngcontent-%COMP%] {\n  color: #ffc233;\n  background: #ffe8b3;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.four[_ngcontent-%COMP%] {\n  color: #e05260;\n  background: #f7d4d7;\n}\n.home-content[_ngcontent-%COMP%]   .total-order[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  \n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .recent-sales[_ngcontent-%COMP%] {\n  width: 65%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  \n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li.topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n  font-size: 400;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #0A2558;\n  padding: 4px 12px;\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0dd488;\n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n  width: 35%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px 0 0;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin-right: 10px;\n  background: #333;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%], .price[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n  color: #333;\n}\n\n@media (max-width: 1240px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n    \n    overflow: hidden;\n    left: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 220px);\n    left: 220px;\n  }\n}\n@media (max-width: 1150px) {\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: scroll;\n    margin-bottom: 30px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 1000px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: calc(100% / 2 - 15px);\n    margin-bottom: 15px;\n  }\n}\n@media (max-width: 700px) {\n  nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    height: 50px;\n    min-width: 40px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n    width: 560px;\n  }\n}\n@media (max-width: 550px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  --msger-bg: #fff;\n  --border: 23px solid #ddd;\n  --left-msg-bg: #ececec;\n  --right-msg-bg: #26ff79;\n}\n.Neon[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #494949;\n  position: relative;\n}\n.Neon[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%] {\n  display: block;\n  width: 343px;\n  margin: 0 auto 25px auto;\n  padding: 25px;\n  color: #8d9499;\n  color: #97A1A8;\n  background: #fff;\n  border: 2px dashed #C8CBCE;\n  text-align: center;\n  transition: box-shadow 0.3s, border-color 0.3s;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%]   .Neon-input-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-top: -10px;\n  transition: all 0.3s ease;\n}\n.Neon-input-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n.Neon-input-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.Neon-input-choose-btn.blue[_ngcontent-%COMP%] {\n  color: #008BFF;\n  border: 1px solid #008BFF;\n}\n.Neon-input-choose-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 14px;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: bold;\n  color: #8d9496;\n  border-radius: 3px;\n  border: 1px solid #c6c6c6;\n  vertical-align: middle;\n  background-color: #fff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\nbody[_ngcontent-%COMP%] {\n  background: #632778;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border-color: #BA68C8;\n}\n.profile-button[_ngcontent-%COMP%] {\n  background: #632778;\n  box-shadow: none;\n  border: none;\n}\n.profile-button[_ngcontent-%COMP%]:hover {\n  background: #682773;\n}\n.profile-button[_ngcontent-%COMP%]:focus {\n  background: #682773;\n  box-shadow: none;\n}\n.profile-button[_ngcontent-%COMP%]:active {\n  background: #682773;\n  box-shadow: none;\n}\n.back[_ngcontent-%COMP%]:hover {\n  color: #682773;\n  cursor: pointer;\n}\n.labels[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  font-size: 16px;\n}\n.add-experience[_ngcontent-%COMP%]:hover {\n  background: #BA68C8;\n  color: #fff;\n  cursor: pointer;\n  border: solid 1px #BA68C8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5R0FBQTtBQUNSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlGO0FBRkE7RUFDRSxnQkFBQTtBQUtGO0FBSEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQU1GO0FBSkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFPRjtBQUxBO0VBQ0UsbUJBQUE7QUFRRjtBQU5BO0VBQ0UsbUJBQUE7QUFTRjtBQVBBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFVRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBV0Y7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFZRjtBQVRBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFZSjtBQVZFO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0FBYUo7QUFYRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtF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ZUFBQTtBQWtFSjtBQS9EQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWtFSiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5zaWRlYmFye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwOWRiYWU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG4uc2lkZWJhci5hY3RpdmV7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlsc3tcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zaWRlYmFyIC5sb2dvLWRldGFpbHMgaXtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlscyAubG9nb19uYW1le1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3N7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGF7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGEuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICMxYWM3YTE7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICMxMWRiYmE7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBpe1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYSAubGlua3NfbmFtZXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgLmxvZ19vdXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvbWUtc2VjdGlvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgfVxyXG4gIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb257XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjQwcHgpO1xyXG4gICAgbGVmdDogMjQwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbiBuYXZ7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAuc2lkZWJhci1idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIG5hdiAuc2lkZWJhci1idXR0b24gaXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmhvbWUtc2VjdGlvbiBuYXYgLnNlYXJjaC1ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICB9XHJcbiAgbmF2IC5zZWFyY2gtYm94IGlucHV0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjZGQTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFRkVFRjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG4gIG5hdiAuc2VhcmNoLWJveCAuYngtc2VhcmNoe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDllNGI0O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjQgZWFzZTtcclxuICB9XHJcbiAgLmhvbWUtc2VjdGlvbiBuYXYgLnByb2ZpbGUtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjZGQTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFRkVFRjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE5MHB4O1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgMnB4O1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyAuYWRtaW5fbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgbmF2IC5wcm9maWxlLWRldGFpbHMgaXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIC5ob21lLWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTA0cHg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLm92ZXJ2aWV3LWJveGVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gIH1cclxuICAub3ZlcnZpZXctYm94ZXMgLmJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNCAtIDE1cHgpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE1cHggMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9XHJcbiAgLm92ZXJ2aWV3LWJveGVzIC5ib3gtdG9waWN7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLm51bWJlcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmluZGljYXRvcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmluZGljYXRvciBpe1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEZEQUNCO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICAuYm94IC5pbmRpY2F0b3IgaS5kb3due1xyXG4gICAgYmFja2dyb3VuZDogI2U4N2Q4ODtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5pbmRpY2F0b3IgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2NjZTVmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM2NmIwZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAtMTVweCAwIDAgNnB4O1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmNhcnQudHdve1xyXG4gICAgIGNvbG9yOiAjMkJENDdEO1xyXG4gICAgIGJhY2tncm91bmQ6ICNDMEYyRDg7XHJcbiAgIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmNhcnQudGhyZWV7XHJcbiAgICAgY29sb3I6ICNmZmMyMzM7XHJcbiAgICAgYmFja2dyb3VuZDogI2ZmZThiMztcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC5mb3Vye1xyXG4gICAgIGNvbG9yOiAjZTA1MjYwO1xyXG4gICAgIGJhY2tncm91bmQ6ICNmN2Q0ZDc7XHJcbiAgIH1cclxuICAuaG9tZS1jb250ZW50IC50b3RhbC1vcmRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC8qIHBhZGRpbmc6IDAgMjBweDsgKi9cclxuICB9XHJcbiAgLyogbGVmdCBib3ggKi9cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAucmVjZW50LXNhbGVze1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLnNhbGVzLWRldGFpbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5ib3ggLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDEwcHg7ICovXHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlscyBsaS50b3BpY3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlscyBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLnNhbGVzLWRldGFpbHMgbGkgYXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiA0MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLmJveCAuYnV0dG9uIGF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMwQTI1NTg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLmJveCAuYnV0dG9uIGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAgIzBkZDQ4ODtcclxuICB9XHJcbiAgXHJcbiAgLyogUmlnaHQgYm94ICovXHJcbiAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLnRvcC1zYWxlc3tcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLnRvcC1zYWxlcyBsaXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIGEgaW1ne1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLnRvcC1zYWxlcyBsaSBhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIC5wcm9kdWN0LFxyXG4gIC5wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgLyogUmVzcG9uc2l2ZSBNZWRpYSBRdWVyeSAqL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjQwcHgpIHtcclxuICAgIC5zaWRlYmFye1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyLmFjdGl2ZXtcclxuICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWUtc2VjdGlvbntcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbntcclxuICAgICAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIDIyMHB4KTsgKi9cclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbGVmdDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbiBuYXZ7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweCk7XHJcbiAgICAgIGxlZnQ6IDIyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlc3tcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC5ib3h7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAudG9wLXNhbGVze1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC8gMiAtIDE1cHgpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIG5hdiAuc2lkZWJhci1idXR0b24gLmRhc2hib2FyZCxcclxuICAgIG5hdiAucHJvZmlsZS1kZXRhaWxzIC5hZG1pbl9uYW1lLFxyXG4gICAgbmF2IC5wcm9maWxlLWRldGFpbHMgaXtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5ob21lLXNlY3Rpb24gbmF2IC5wcm9maWxlLWRldGFpbHN7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLnNhbGVzLWRldGFpbHN7XHJcbiAgICAgIHdpZHRoOiA1NjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAub3ZlcnZpZXctYm94ZXMgLmJveHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdiAucHJvZmlsZS1kZXRhaWxze1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICA6cm9vdCB7XHJcbiAgICAtLWJvZHktYmc6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNWY3ZmEgMCUsICNjM2NmZTIgMTAwJSk7XHJcbiAgICAtLW1zZ2VyLWJnOiAjZmZmO1xyXG4gICAgLS1ib3JkZXI6IDIzcHggc29saWQgI2RkZDtcclxuICAgIC0tbGVmdC1tc2ctYmc6ICNlY2VjZWM7XHJcbiAgICAtLXJpZ2h0LW1zZy1iZzogIzI2ZmY3OTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLk5lb24ge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICAuTmVvbiAqIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LWRyYWdEcm9wIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDM0M3B4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMjVweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGNvbG9yOiAjOGQ5NDk5O1xyXG4gICAgY29sb3I6ICM5N0ExQTg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNDOENCQ0U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xyXG4gIH1cclxuICAuTmVvbi1pbnB1dC1kcmFnRHJvcCAuTmVvbi1pbnB1dC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtdGV4dCBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LXRleHQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LWNob29zZS1idG4uYmx1ZSB7XHJcbiAgICBjb2xvcjogIzAwOEJGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhCRkY7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LWNob29zZS1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM4ZDk0OTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzZjNmM2O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDk5LCAzOSwgMTIwKVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNCQTY4QzhcclxufVxyXG5cclxuLnByb2ZpbGUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig5OSwgMzksIDEyMCk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lXHJcbn1cclxuXHJcbi5wcm9maWxlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjgyNzczXHJcbn1cclxuXHJcbi5wcm9maWxlLWJ1dHRvbjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjgyNzczO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG59XHJcblxyXG4ucHJvZmlsZS1idXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICM2ODI3NzM7XHJcbiAgICBib3gtc2hhZG93OiBub25lXHJcbn1cclxuXHJcbi5iYWNrOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjgyNzczO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5sYWJlbHMge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxufVxyXG5cclxuLmFkZC1leHBlcmllbmNlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNCQTY4Qzg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNCQTY4QzhcclxufSJdfQ== */"] });


/***/ }),

/***/ "XoyV":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _traitement_malade_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traitement-malade/pdf/pdf.component */ "BI9a");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "M95H");
/* harmony import */ var _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-content/home-content.component */ "sMYi");
/* harmony import */ var _traitement_malade_traitement_malade_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./traitement-malade/traitement-malade.component */ "vUTr");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "vH6C");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "nfc2");
/* harmony import */ var _paients_paients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paients/paients.component */ "sJ+F");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team/team.component */ "DDT9");
/* harmony import */ var _pharmacie_pharmacie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pharmacie/pharmacie.component */ "7jrk");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "eLR9");
/* harmony import */ var _biblio_biblio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./biblio/biblio.component */ "9U2B");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal.component */ "dAdV");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "XF2g");
/* harmony import */ var _analytic_analytic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./analytic/analytic.component */ "ob2r");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highcharts-angular */ "kAVD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__["PipesModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_17__["HighchartsChartModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_5__["HomeContentComponent"],
        _traitement_malade_traitement_malade_component__WEBPACK_IMPORTED_MODULE_6__["TraitementMaladeComponent"],
        _traitement_malade_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_1__["PdfComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
        _paients_paients_component__WEBPACK_IMPORTED_MODULE_9__["PaientsComponent"],
        _team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"],
        _pharmacie_pharmacie_component__WEBPACK_IMPORTED_MODULE_11__["PharmacieComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
        _biblio_biblio_component__WEBPACK_IMPORTED_MODULE_13__["BiblioComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
        _analytic_analytic_component__WEBPACK_IMPORTED_MODULE_16__["AnalyticComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__["PipesModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_17__["HighchartsChartModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dashboard/dashboard.module */ "XoyV");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/auth/auth.module */ "305l");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/pipes.module */ "iTUp");
/* harmony import */ var _test_pfe_test_pfe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-pfe/test-pfe.component */ "6I3l");
/* harmony import */ var _chatboot_chatboot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatboot/chatboot.component */ "cA+X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"],
            _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_0__["DashboardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _test_pfe_test_pfe_component__WEBPACK_IMPORTED_MODULE_6__["TestPFEComponent"],
        _chatboot_chatboot_component__WEBPACK_IMPORTED_MODULE_7__["ChatbootComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"],
        _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_0__["DashboardModule"]] }); })();


/***/ }),

/***/ "ZWDD":
/*!*******************************!*\
  !*** ./src/models/Message.ts ***!
  \*******************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
class Message {
    constructor() {
        this.files = [];
    }
}


/***/ }),

/***/ "cA+X":
/*!************************************************!*\
  !*** ./src/app/chatboot/chatboot.component.ts ***!
  \************************************************/
/*! exports provided: ChatbootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbootComponent", function() { return ChatbootComponent; });
/* harmony import */ var _models_OutputChats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/OutputChats */ "OzS6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ChatbootComponent {
    constructor() { }
    ngOnInit() {
        const newChatBoot = new _models_OutputChats__WEBPACK_IMPORTED_MODULE_0__["OutputChats"]();
        console.log(newChatBoot.output("Hello"));
    }
}
ChatbootComponent.ɵfac = function ChatbootComponent_Factory(t) { return new (t || ChatbootComponent)(); };
ChatbootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatbootComponent, selectors: [["app-chatboot"]], decls: 2, vars: 0, template: function ChatbootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "chatboot works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0Ym9vdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "dAdV":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../models/Patient */ "k74o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var src_models_Infermeri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/Infermeri */ "0gXa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["modalData"];
function ModalComponent_ng_template_0_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r3.element.nom.length ? "Edit" : "Add", " ", ctx_r3.type, "");
} }
function ModalComponent_ng_template_0_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Delete ", ctx_r4.type, "");
} }
function ModalComponent_ng_template_0_div_7_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_div_7_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r13.save(_r7.value, _r8.value, _r9.value, _r10.value); return modal_r2.close("Ok click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_0_div_7_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_div_7_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r16.deleteP(); return modal_r2.close("Ok click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Prenom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 9, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 9, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_div_7_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return modal_r2.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ModalComponent_ng_template_0_div_7_button_24_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ModalComponent_ng_template_0_div_7_button_25_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r5.element.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r5.element.prenom);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r5.element.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r5.element.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.elementDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.elementDeleted);
} }
function ModalComponent_ng_template_0_div_8_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_div_8_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r23.deleteP(); return modal_r2.close("Ok click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Are you sure you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " profile?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_div_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return modal_r2.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ModalComponent_ng_template_0_div_8_button_10_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\"", ctx_r6.elementDeleted.nom + " " + ctx_r6.elementDeleted.prenom, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.elementDeleted);
} }
function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalComponent_ng_template_0_h4_1_Template, 2, 2, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalComponent_ng_template_0_h4_2_Template, 2, 1, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_Template_button_click_3_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ModalComponent_ng_template_0_div_7_Template, 26, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ModalComponent_ng_template_0_div_8_Template, 11, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.elementDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.elementDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.elementDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.elementDeleted);
} }
class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.deleteElement = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeModel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveModel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.triggerModal();
    }
    triggerModal() {
        if (!this.element) {
            if (this.type == 'patient') {
                this.element = new _models_Patient__WEBPACK_IMPORTED_MODULE_0__["Patient"]('', '', '', '', '', '', '');
            }
            else {
                this.element = new src_models_Infermeri__WEBPACK_IMPORTED_MODULE_3__["Infermerie"]('', '', '', '', '', '', '');
            }
        }
        const content = this.modalData;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
            this.closeModel.emit();
        }, (res) => {
            this.closeModel.emit();
        });
    }
    getDismissReason(reason) {
        console.log(reason);
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    save(nom, prenom, email, phone) {
        const n_element = {
            nom: nom, prenom: prenom, email: email, phone: phone
        };
        if (this.element._id && this.element._id.length) {
            n_element['_id'] = this.element._id;
        }
        this.saveModel.emit(n_element);
    }
    deleteP() {
        this.deleteElement.emit();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalData = _t.first);
    } }, inputs: { element: "element", type: "type", elementDeleted: "elementDeleted" }, outputs: { deleteElement: "deleteElement", closeModel: "closeModel", saveModel: "saveModel" }, decls: 2, vars: 0, consts: [["modalData", ""], [1, "modal-header"], ["class", "modal-title", "id", "modal-basic-title", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], ["id", "modal-basic-title", 1, "modal-title"], [1, "form-group"], ["type", "text", "required", "", 1, "form-control", 3, "value"], ["nom", ""], ["prenom", ""], ["type", "email", "required", "", 1, "form-control", 3, "value"], ["email", ""], ["phone", ""], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "text-primary"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModalComponent_ng_template_0_Template, 9, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "eLR9":
/*!****************************************************************!*\
  !*** ./src/app/modules/dashboard/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class SidebarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        console.log(1);
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 56, vars: 9, consts: [[1, "sidebar"], [1, "logo-details"], [1, "bx", "bxl-c-plus-plus"], [1, "logo_name"], [1, "nav-links"], ["routerLinkActive", "active", 3, "routerLink"], [1, "bx", "bx-grid-alt"], [1, "links_name"], [1, "bx", "bx-box"], [1, "bx", "bx-list-ul"], [1, "bx", "bx-pie-chart-alt-2"], [1, "bx", "bx-coin-stack"], [1, "bx", "bx-book-alt"], [1, "bx", "bx-user"], [1, "bx", "bx-message"], [1, "bx", "bx-analyse"], [1, "log_out", "position-static"], [1, "cursor-pointer", 3, "click"], [1, "bx", "bx-log-out"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tabibi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Les Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pharmacie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Traitement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Mon Profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ma biblio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Analytic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_52_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/pharmacie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/traitementMalade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/biblio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/analytic");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 240px;\n  background: #09dbae;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: #fff;\n  min-width: 60px;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  height: 50px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: all 0.4s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #1ac7a1;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #11dbba;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: 60px;\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .log_out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f5f5f5;\n  min-height: 100vh;\n  width: calc(100% - 240px);\n  left: 240px;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  left: 60px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  width: calc(100% - 240px);\n  left: 240px;\n  z-index: 100;\n  padding: 0 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  left: 60px;\n  width: calc(100% - 60px);\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 10px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  max-width: 550px;\n  width: 100%;\n  margin: 0 20px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  font-size: 18px;\n  padding: 0 15px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background: #09e4b4;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 4px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  transition: all 0.4 ease;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  height: 50px;\n  min-width: 190px;\n  padding: 0 15px 0 2px;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 6px;\n  object-fit: cover;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  margin: 0 10px;\n  white-space: nowrap;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #333;\n}\n.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 104px;\n}\n.home-content[_ngcontent-%COMP%]   .overview-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  margin-bottom: 26px;\n}\n.overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: calc(100% / 4 - 15px);\n  background: #fff;\n  padding: 15px 14px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.overview-boxes[_ngcontent-%COMP%]   .box-topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 35px;\n  margin-top: -6px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background: #8FDACB;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 20px;\n  margin-right: 5px;\n}\n.box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i.down[_ngcontent-%COMP%] {\n  background: #e87d88;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  height: 50px;\n  width: 50px;\n  background: #cce5ff;\n  line-height: 50px;\n  text-align: center;\n  color: #66b0ff;\n  border-radius: 12px;\n  margin: -15px 0 0 6px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.two[_ngcontent-%COMP%] {\n  color: #2BD47D;\n  background: #C0F2D8;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.three[_ngcontent-%COMP%] {\n  color: #ffc233;\n  background: #ffe8b3;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.four[_ngcontent-%COMP%] {\n  color: #e05260;\n  background: #f7d4d7;\n}\n.home-content[_ngcontent-%COMP%]   .total-order[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  \n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .recent-sales[_ngcontent-%COMP%] {\n  width: 65%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  \n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li.topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n  font-size: 400;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #0A2558;\n  padding: 4px 12px;\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0dd488;\n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n  width: 35%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px 0 0;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin-right: 10px;\n  background: #333;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%], .price[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n  color: #333;\n}\n\n@media (max-width: 1240px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n    \n    overflow: hidden;\n    left: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 220px);\n    left: 220px;\n  }\n}\n@media (max-width: 1150px) {\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: scroll;\n    margin-bottom: 30px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 1000px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: calc(100% / 2 - 15px);\n    margin-bottom: 15px;\n  }\n}\n@media (max-width: 700px) {\n  nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    height: 50px;\n    min-width: 40px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n    width: 560px;\n  }\n}\n@media (max-width: 550px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  --msger-bg: #fff;\n  --border: 23px solid #ddd;\n  --left-msg-bg: #ececec;\n  --right-msg-bg: #26ff79;\n}\n.Neon[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #494949;\n  position: relative;\n}\n.Neon[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%] {\n  display: block;\n  width: 343px;\n  margin: 0 auto 25px auto;\n  padding: 25px;\n  color: #8d9499;\n  color: #97A1A8;\n  background: #fff;\n  border: 2px dashed #C8CBCE;\n  text-align: center;\n  transition: box-shadow 0.3s, border-color 0.3s;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%]   .Neon-input-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-top: -10px;\n  transition: all 0.3s ease;\n}\n.Neon-input-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n.Neon-input-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.Neon-input-choose-btn.blue[_ngcontent-%COMP%] {\n  color: #008BFF;\n  border: 1px solid #008BFF;\n}\n.Neon-input-choose-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 14px;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: bold;\n  color: #8d9496;\n  border-radius: 3px;\n  border: 1px solid #c6c6c6;\n  vertical-align: middle;\n  background-color: #fff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5R0FBQTtBQUNSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlGO0FBRkE7RUFDRSxnQkFBQTtBQUtGO0FBSEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQU1GO0FBSkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFPRjtBQUxBO0VBQ0UsbUJBQUE7QUFRRjtBQU5BO0VBQ0UsbUJBQUE7QUFTRjtBQVBBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFVRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBV0Y7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFZRjtBQVRBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFZSjtBQVZFO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0FBYUo7QUFYRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtF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O0VBOERKO0FBQ0Y7QUE1REU7RUFDRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQThESjs7RUE1REU7SUFDRSxhQUFBO0VBK0RKO0FBQ0Y7QUE1REU7RUFDRSw0REFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBOERKO0FBMURFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBNkRKO0FBekRFO0VBR0Usc0JBQUE7QUE0REo7QUExREU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBR0EsOENBQUE7QUE2REo7QUEzREU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFHQSx5QkFBQTtBQThESjtBQTVERTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBK0RKO0FBN0RFO0VBQ0UsZUFBQTtBQWdFSjtBQTlERTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQWlFSjtBQS9ERTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBR0Esb0JBQUE7QUFrRUoiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uc2lkZWJhcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDlkYmFlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuLnNpZGViYXIuYWN0aXZle1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcbi5zaWRlYmFyIC5sb2dvLWRldGFpbHN7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxzIGl7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcbi5zaWRlYmFyIC5sb2dvLWRldGFpbHMgLmxvZ29fbmFtZXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtze1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhe1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kOiAjMWFjN2ExO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjMTFkYmJhO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgaXtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGEgLmxpbmtzX25hbWV7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIC5sb2dfb3V0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ob21lLXNlY3Rpb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjQwcHgpO1xyXG4gICAgbGVmdDogMjQwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgbGVmdDogNjBweDtcclxuICB9XHJcbiAgLmhvbWUtc2VjdGlvbiBuYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgfVxyXG4gIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgbGVmdDogNjBweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICB9XHJcbiAgLmhvbWUtc2VjdGlvbiBuYXYgLnNpZGViYXItYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBuYXYgLnNpZGViYXItYnV0dG9uIGl7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2IC5zZWFyY2gtYm94e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgfVxyXG4gIG5hdiAuc2VhcmNoLWJveCBpbnB1dHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY2RkE7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRUZFRUYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gIH1cclxuICBuYXYgLnNlYXJjaC1ib3ggLmJ4LXNlYXJjaHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzA5ZTRiNDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40IGVhc2U7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2IC5wcm9maWxlLWRldGFpbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY2RkE7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRUZFRUYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxOTBweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDJweDtcclxuICB9XHJcbiAgbmF2IC5wcm9maWxlLWRldGFpbHMgaW1ne1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgbmF2IC5wcm9maWxlLWRldGFpbHMgLmFkbWluX25hbWV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIG5hdiAucHJvZmlsZS1kZXRhaWxzIGl7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgLmhvbWUtc2VjdGlvbiAuaG9tZS1jb250ZW50e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwNHB4O1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5vdmVydmlldy1ib3hlc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICB9XHJcbiAgLm92ZXJ2aWV3LWJveGVzIC5ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQgLSAxNXB4KTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgfVxyXG4gIC5vdmVydmlldy1ib3hlcyAuYm94LXRvcGlje1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5udW1iZXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5pbmRpY2F0b3J7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5pbmRpY2F0b3IgaXtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzhGREFDQjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmJveCAuaW5kaWNhdG9yIGkuZG93bntcclxuICAgIGJhY2tncm91bmQ6ICNlODdkODg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuaW5kaWNhdG9yIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmNhcnR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2U1ZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNjZiMGZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbjogLTE1cHggMCAwIDZweDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0LnR3b3tcclxuICAgICBjb2xvcjogIzJCRDQ3RDtcclxuICAgICBiYWNrZ3JvdW5kOiAjQzBGMkQ4O1xyXG4gICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0LnRocmVle1xyXG4gICAgIGNvbG9yOiAjZmZjMjMzO1xyXG4gICAgIGJhY2tncm91bmQ6ICNmZmU4YjM7XHJcbiAgIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmNhcnQuZm91cntcclxuICAgICBjb2xvcjogI2UwNTI2MDtcclxuICAgICBiYWNrZ3JvdW5kOiAjZjdkNGQ3O1xyXG4gICB9XHJcbiAgLmhvbWUtY29udGVudCAudG90YWwtb3JkZXJ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvKiBwYWRkaW5nOiAwIDIwcHg7ICovXHJcbiAgfVxyXG4gIC8qIGxlZnQgYm94ICovXHJcbiAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLnJlY2VudC1zYWxlc3tcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAxMHB4OyAqL1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLnNhbGVzLWRldGFpbHMgbGkudG9waWN7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLnNhbGVzLWRldGFpbHMgbGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxzIGxpIGF7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtc2l6ZTogNDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLmJveCAuYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5ib3ggLmJ1dHRvbiBhe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEEyNTU4O1xyXG4gICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5ib3ggLmJ1dHRvbiBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogICMwZGQ0ODg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJpZ2h0IGJveCAqL1xyXG4gIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC50b3Atc2FsZXN7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLnRvcC1zYWxlcyBsaSBhIGltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGkgYXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLnRvcC1zYWxlcyBsaSAucHJvZHVjdCxcclxuICAucHJpY2V7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIC8qIFJlc3BvbnNpdmUgTWVkaWEgUXVlcnkgKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTI0MHB4KSB7XHJcbiAgICAuc2lkZWJhcntcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmV7XHJcbiAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgIH1cclxuICAgIC5ob21lLXNlY3Rpb257XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgbGVmdDogNjBweDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb257XHJcbiAgICAgIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweCk7ICovXHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGxlZnQ6IDIyMHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWUtc2VjdGlvbiBuYXZ7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgbGVmdDogNjBweDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjIwcHgpO1xyXG4gICAgICBsZWZ0OiAyMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExNTBweCkge1xyXG4gICAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXN7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAuYm94e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLnRvcC1zYWxlc3tcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAub3ZlcnZpZXctYm94ZXMgLmJveHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDIgLSAxNXB4KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICBuYXYgLnNpZGViYXItYnV0dG9uIC5kYXNoYm9hcmQsXHJcbiAgICBuYXYgLnByb2ZpbGUtZGV0YWlscyAuYWRtaW5fbmFtZSxcclxuICAgIG5hdiAucHJvZmlsZS1kZXRhaWxzIGl7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1zZWN0aW9uIG5hdiAucHJvZmlsZS1kZXRhaWxze1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgIH1cclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxze1xyXG4gICAgICB3aWR0aDogNTYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLm92ZXJ2aWV3LWJveGVzIC5ib3h7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbiBuYXYgLnByb2ZpbGUtZGV0YWlsc3tcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgOnJvb3Qge1xyXG4gICAgLS1ib2R5LWJnOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmN2ZhIDAlLCAjYzNjZmUyIDEwMCUpO1xyXG4gICAgLS1tc2dlci1iZzogI2ZmZjtcclxuICAgIC0tYm9yZGVyOiAyM3B4IHNvbGlkICNkZGQ7XHJcbiAgICAtLWxlZnQtbXNnLWJnOiAjZWNlY2VjO1xyXG4gICAgLS1yaWdodC1tc2ctYmc6ICMyNmZmNzk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5OZW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICBcclxuICB9XHJcbiAgLk5lb24gKiB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuTmVvbi1pbnB1dC1kcmFnRHJvcCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzNDNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDI1cHggYXV0bztcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBjb2xvcjogIzhkOTQ5OTtcclxuICAgIGNvbG9yOiAjOTdBMUE4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQzhDQkNFO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICB9XHJcbiAgLk5lb24taW5wdXQtZHJhZ0Ryb3AgLk5lb24taW5wdXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LXRleHQgaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAuTmVvbi1pbnB1dC10ZXh0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuTmVvbi1pbnB1dC1jaG9vc2UtYnRuLmJsdWUge1xyXG4gICAgY29sb3I6ICMwMDhCRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4QkZGO1xyXG4gIH1cclxuICAuTmVvbi1pbnB1dC1jaG9vc2UtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjOGQ5NDk2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _date_format_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-format.pipe */ "u7Z3");
/* harmony import */ var _text_resume_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-resume.pipe */ "+SuS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_date_format_pipe__WEBPACK_IMPORTED_MODULE_1__["DateFormatPipe"],
        _text_resume_pipe__WEBPACK_IMPORTED_MODULE_2__["TextResumePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_date_format_pipe__WEBPACK_IMPORTED_MODULE_1__["DateFormatPipe"],
        _text_resume_pipe__WEBPACK_IMPORTED_MODULE_2__["TextResumePipe"]] }); })();


/***/ }),

/***/ "k74o":
/*!*******************************!*\
  !*** ./src/models/Patient.ts ***!
  \*******************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
class Patient {
    constructor(_id, _phone, _malades, _nom, _prenom, _email, _adresse) {
        this._id = _id;
        this.phone = _phone;
        this.malades = _malades;
        this.nom = _nom;
        this.prenom = _prenom;
        this.email = _email;
        this.adresse = _adresse;
    }
}


/***/ }),

/***/ "lIeI":
/*!*********************************************!*\
  !*** ./src/services/predictions.service.ts ***!
  \*********************************************/
/*! exports provided: PredictionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsService", function() { return PredictionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "zhpf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PredictionsService {
    constructor() { }
    load_model(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.model = yield _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["loadLayersModel"](model.path);
        });
    }
    prepare_image(predParam, index) {
        return new Promise(resolve => {
            const image = predParam.tagImage;
            const imageOrigin = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["browser"].fromPixels(image).toFloat();
            this.imgPreProcess = this.configureImg(imageOrigin, predParam.models[index]);
            resolve();
        });
    }
    configureImg(imageOrigin, model) {
        const width = model.sizeTargetImage.width;
        const height = model.sizeTargetImage.height;
        const imageResized = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["image"].resizeBilinear(imageOrigin, [width, height]);
        const imgConfig = imageResized.arraySync();
        imgConfig.map((level1, i) => {
            level1.map((level2, j) => {
                imgConfig[i][j] = [level2[0] / 255, level2[1] / 255, level2[2] / 255];
            });
        });
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor"](imgConfig).reshape([1, width, height, 3]);
    }
    predict(predParam, type) {
        const index = predParam.models.findIndex(x => x.type === type);
        return new Promise((resolve) => {
            this.load_model(predParam.models[index]).then(() => {
                this.prepare_image(predParam, index).then(() => {
                    const output = this.model.predict(this.imgPreProcess);
                    const predictions = Array.from(output.dataSync());
                    resolve(this.reformulePrediction(predictions, type));
                });
            });
        });
    }
    reformulePrediction(predictions, type) {
        if (type.toLowerCase() == 'skin') {
            if (predictions[0] < 0.5) {
                return {
                    typeOfCellule: 'Bengin',
                    porcentage: (predictions[0] * 100) / 0.5,
                    etat: true
                };
            }
            else {
                console.log(((predictions[0] - 0.5) * 100) / 0.5);
                return {
                    typeOfCellule: 'malignant',
                    porcentage: (((predictions[0] - 0.5) * 100)) / 0.5,
                    etat: false
                };
            }
        }
    }
}
PredictionsService.ɵfac = function PredictionsService_Factory(t) { return new (t || PredictionsService)(); };
PredictionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PredictionsService, factory: PredictionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nfc2":
/*!******************************************************************!*\
  !*** ./src/app/modules/dashboard/messages/messages.component.ts ***!
  \******************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _models_Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../models/Message */ "ZWDD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/user.service */ "qfBg");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/message.service */ "tZre");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "eLR9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_text_resume_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/text-resume.pipe */ "+SuS");
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/date-format.pipe */ "u7Z3");








function MessagesComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessagesComponent_li_17_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const patient_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r7.patientSelected = patient_r5; return ctx_r7.getMessages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.patientSelected == patient_r5 ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 2, patient_r5.nom + " " + patient_r5.prenom, 18), " ");
} }
function MessagesComponent_li_27_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r10.user.nom, "");
} }
function MessagesComponent_li_27_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r11.patientSelected.nom, "");
} }
function MessagesComponent_li_27_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r9.subject, " ");
} }
function MessagesComponent_li_27_div_9_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.bytesToSize(file_r16.size));
} }
function MessagesComponent_li_27_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MessagesComponent_li_27_div_9_div_1_div_1_Template, 8, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("file");
} }
function MessagesComponent_li_27_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MessagesComponent_li_27_div_9_div_1_Template, 8, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", message_r9.files);
} }
function MessagesComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MessagesComponent_li_27_h2_3_Template, 2, 1, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MessagesComponent_li_27_h2_4_Template, 2, 1, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MessagesComponent_li_27_div_8_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MessagesComponent_li_27_div_9_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", message_r9.fromDoctorId == ctx_r1.user._id ? "me" : "you");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", message_r9.fromDoctorId == ctx_r1.user._id ? "blue" : "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r9.fromDoctorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r9.fromPatientId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, message_r9.updatedAt.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r9.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r9.files.length);
} }
function MessagesComponent_div_28_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 2, file_r22.name, 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r24.bytesToSize(file_r22.size));
} }
function MessagesComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessagesComponent_div_28_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const index_r23 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.deleteFile(index_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MessagesComponent_div_28_div_1_div_3_Template, 9, 5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r22.name);
} }
function MessagesComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MessagesComponent_div_28_div_1_Template, 4, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.filesSelected);
} }
class MessagesComponent {
    constructor(userService, msgService) {
        this.userService = userService;
        this.msgService = msgService;
        this.messages = [];
        this.filesSelected = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.getPatients();
    }
    fiileSelected(target) {
        for (let i = 0; i < target.files.length; i++)
            this.filesSelected.push(target.files[i]);
    }
    scrollToBottom() {
        const element = document.getElementById("chat");
        element.scrollTop = 900 * 900 * 900 * 900;
        // element.scrollTo({
        //   top: element.scrollHeight,
        //   left: 0,
        //   behavior: 'smooth'
        // });
    }
    envoyer(tagMessage) {
        const new_message = new _models_Message__WEBPACK_IMPORTED_MODULE_0__["Message"]();
        new_message.fromDoctorId = this.user._id;
        new_message.toPatientId = this.patientSelected._id;
        new_message.updatedAt = new Date();
        if (this.filesSelected.length) {
            new_message.files = new_message.files.concat(this.filesSelected);
            this.filesSelected = [];
        }
        else {
            if (!this.filesSelected.length) {
                const message = tagMessage.value;
                new_message.subject = message;
            }
        }
        this.messages.push(new_message);
        tagMessage.value = '';
        this.msgService.envoyer(new_message.fromDoctorId, new_message.toPatientId, new_message.subject, new_message.files)
            .subscribe((resp) => {
            this.scrollToBottom();
            console.log(resp);
        });
    }
    deleteFile(index) {
        this.filesSelected.splice(index, 1);
    }
    bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) {
            return '0 Byte';
        }
        // tslint:disable-next-line: radix
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
    }
    getPatients() {
        this.userService.getAlls(this.user._id)
            .subscribe((res) => {
            this.user.patients = res.patients;
            this.patientSelected = this.user.patients[0];
            this.getMessages();
        });
    }
    getMessages() {
        this.msgService.getMessages(this.user._id, this.patientSelected._id)
            .subscribe((resp) => {
            this.messages = resp;
            this.messages.sort((messageA, messageB) => new Date(messageA.updatedAt).getTime() - new Date(messageB.updatedAt).getTime());
            setTimeout(() => {
                this.scrollToBottom();
            }, 100);
        });
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 41, vars: 6, consts: [[1, "home-section"], [1, "sidebar-button"], [1, "dashboard"], [1, "profile-details"], ["width", "30", "alt", "", 3, "src"], [1, "admin_name"], [1, "bx", "bx-chevron-down"], [1, "home-content"], ["id", "container", 1, "w-auto", "row"], [1, "col-4"], ["type", "text", "placeholder", "search"], [2, "overflow", "auto"], ["class", "cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-6", "w-auto"], ["src", "../../../../assets/imgs/avatar.jpg", "width", "50", "alt", ""], ["id", "chat"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["style", "bottom: 280px;width: 750px;", "class", "border-f2 border-top bg-white p-1 m-3 mx-4 position-absolute", 4, "ngIf"], [1, "p-2"], [1, "input-group", "p-3"], ["type", "file", "hidden", "", "multiple", "", 3, "change"], ["file", ""], [1, "input-group-append", "cursor-pointer", 3, "click"], [1, "cursor-pointer", "text-white", "input-group-text", "attach_btn", "px-3", "py-4", 2, "background-color", "#5e616a", "border-radius", "20px 0px 0px 20px"], [1, "fas", "fa-paperclip"], ["placeholder", "type message...", "aria-label", "With textarea", 1, "form-control", "py-2", "px-2", "text-white", 2, "background-color", "#5e616a"], ["message", ""], [1, "cursor-pointer", "text-white", "input-group-text", "send_btn", "px-3", "py-4", 2, "background-color", "#5e616a", "border-radius", "0px 20px 20px 0px"], [1, "fas", "fa-location-arrow"], [1, "cursor-pointer", 3, "ngClass", "click"], [2, "color", "white"], [3, "ngClass"], [1, "entete"], [1, "status", "mx-2", 3, "ngClass"], ["class", "me-2", 4, "ngIf"], ["class", "message", 4, "ngIf"], [1, "me-2"], [1, "message"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["class", "d-flex mx-3 mb-1 align-items-center", 4, "ngIf"], [1, "d-flex", "mx-3", "mb-1", "align-items-center"], [2, "font-size", "40px"], [1, "fas", "fa-clipboard", "text-white"], [1, "mx-3", "overflow-hidden"], [1, "m-0"], [1, "d-block"], [1, "border-f2", "border-top", "bg-white", "p-1", "m-3", "mx-4", "position-absolute", 2, "bottom", "280px", "width", "750px"], [1, "d-flex", "justify-content-end"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "fas", "fa-clipboard", "text-primary"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "aside", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MessagesComponent_li_17_Template, 6, 5, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "main", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "already 1902 messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MessagesComponent_li_27_Template, 10, 9, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, MessagesComponent_div_28_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MessagesComponent_Template_input_change_31_listener($event) { return ctx.fiileSelected($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessagesComponent_Template_span_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "textarea", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessagesComponent_Template_span_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37); return ctx.envoyer(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user.photos[0].data, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Dr ", ctx.user.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.user.patients);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Chat with ", ctx.patientSelected.nom + " " + ctx.patientSelected.prenom, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filesSelected.length);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_pipes_text_resume_pipe__WEBPACK_IMPORTED_MODULE_6__["TextResumePipe"], _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__["DateFormatPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 240px;\n  background: #09dbae;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: #fff;\n  min-width: 60px;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  height: 50px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: all 0.4s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #1ac7a1;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #11dbba;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: 60px;\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .log_out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f5f5f5;\n  min-height: 100vh;\n  width: calc(100% - 240px);\n  left: 240px;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  left: 60px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  width: calc(100% - 240px);\n  left: 240px;\n  z-index: 100;\n  padding: 0 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  left: 60px;\n  width: calc(100% - 60px);\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 10px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  max-width: 550px;\n  width: 100%;\n  margin: 0 20px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background: #09e4b4;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 4px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  transition: all 0.4 ease;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  height: 50px;\n  min-width: 190px;\n  padding: 0 15px 0 2px;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 6px;\n  object-fit: cover;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  margin: 0 10px;\n  white-space: nowrap;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #333;\n}\n.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 104px;\n}\n.home-content[_ngcontent-%COMP%]   .overview-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  margin-bottom: 26px;\n}\n.overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: calc(100% / 4 - 15px);\n  background: #fff;\n  padding: 15px 14px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.overview-boxes[_ngcontent-%COMP%]   .box-topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 35px;\n  margin-top: -6px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background: #8FDACB;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 20px;\n  margin-right: 5px;\n}\n.box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i.down[_ngcontent-%COMP%] {\n  background: #e87d88;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  height: 50px;\n  width: 50px;\n  background: #cce5ff;\n  line-height: 50px;\n  text-align: center;\n  color: #66b0ff;\n  border-radius: 12px;\n  margin: -15px 0 0 6px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.two[_ngcontent-%COMP%] {\n  color: #2BD47D;\n  background: #C0F2D8;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.three[_ngcontent-%COMP%] {\n  color: #ffc233;\n  background: #ffe8b3;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.four[_ngcontent-%COMP%] {\n  color: #e05260;\n  background: #f7d4d7;\n}\n.home-content[_ngcontent-%COMP%]   .total-order[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  \n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .recent-sales[_ngcontent-%COMP%] {\n  width: 65%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  \n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li.topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n  font-size: 400;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #0A2558;\n  padding: 4px 12px;\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0dd488;\n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n  width: 35%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px 0 0;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin-right: 10px;\n  background: #333;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%], .price[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n  color: #333;\n}\n\n@media (max-width: 1240px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n    \n    overflow: hidden;\n    left: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 220px);\n    left: 220px;\n  }\n}\n@media (max-width: 1150px) {\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: scroll;\n    margin-bottom: 30px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 1000px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: calc(100% / 2 - 15px);\n    margin-bottom: 15px;\n  }\n}\n@media (max-width: 700px) {\n  nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    height: 50px;\n    min-width: 40px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n    width: 560px;\n  }\n}\n@media (max-width: 550px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  --msger-bg: #fff;\n  --border: 23px solid #ddd;\n  --left-msg-bg: #ececec;\n  --right-msg-bg: #26ff79;\n}\n.Neon[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #494949;\n  position: relative;\n}\n.Neon[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%] {\n  display: block;\n  width: 343px;\n  margin: 0 auto 25px auto;\n  padding: 25px;\n  color: #8d9499;\n  color: #97A1A8;\n  background: #fff;\n  border: 2px dashed #C8CBCE;\n  text-align: center;\n  transition: box-shadow 0.3s, border-color 0.3s;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%]   .Neon-input-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-top: -10px;\n  transition: all 0.3s ease;\n}\n.Neon-input-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n.Neon-input-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.Neon-input-choose-btn.blue[_ngcontent-%COMP%] {\n  color: #008BFF;\n  border: 1px solid #008BFF;\n}\n.Neon-input-choose-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 14px;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: bold;\n  color: #8d9496;\n  border-radius: 3px;\n  border: 1px solid #c6c6c6;\n  vertical-align: middle;\n  background-color: #fff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #abd9e9;\n  font-family: Arial;\n}\n#container[_ngcontent-%COMP%] {\n  width: 750px;\n  height: 800px;\n  background: #eff3f7;\n  margin: 0 auto;\n  font-size: 0;\n  border-radius: 5px;\n  overflow: hidden;\n}\naside[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 100%;\n  background-color: #3b3e49;\n  display: inline-block;\n  font-size: 15px;\n  vertical-align: top;\n}\nmain[_ngcontent-%COMP%] {\n  height: 100%;\n  display: inline-block;\n  font-size: 15px;\n  vertical-align: top;\n}\naside[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  padding: 30px 20px;\n}\naside[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  padding: 0 50px 0 20px;\n  background-color: #5e616a;\n  border: none;\n  border-radius: 3px;\n  color: #fff;\n  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_search.png);\n  background-repeat: no-repeat;\n  background-position: 170px;\n  background-size: 40px;\n}\naside[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #fff;\n}\naside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin: 0;\n  list-style-type: none;\n  overflow-y: scroll;\n  height: 690px;\n}\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #5e616a;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: #515668;\n}\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-left: 20px;\n  margin-right: 8px;\n}\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 12px;\n}\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #fff;\n  font-weight: normal;\n  margin-bottom: 5px;\n}\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7e818a;\n  font-weight: normal;\n}\n.status[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 7px;\n}\n.green[_ngcontent-%COMP%] {\n  background-color: #58b666;\n}\n.orange[_ngcontent-%COMP%] {\n  background-color: #ff725d;\n}\n.blue[_ngcontent-%COMP%] {\n  background-color: #6fbced;\n  margin-right: 0;\n  margin-left: 7px;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  height: 110px;\n  padding: 30px 20px 30px 40px;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  border-radius: 50%;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child {\n  width: 24px;\n  margin-top: 8px;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 145px;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\nmain[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  color: #7e818a;\n}\n#chat[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style-type: none;\n  overflow-y: auto;\n  height: 380px;\n  width: 800px;\n  border-top: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n}\n#chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n}\n#chat[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #chat[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 13px;\n  font-weight: normal;\n}\n#chat[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #bbb;\n}\n#chat[_ngcontent-%COMP%]   .entete[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n#chat[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: #fff;\n  line-height: 25px;\n  max-width: 90%;\n  display: inline-block;\n  text-align: left;\n  border-radius: 5px;\n}\n#chat[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%] {\n  text-align: right;\n}\n#chat[_ngcontent-%COMP%]   .you[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background-color: #58b666;\n}\n#chat[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background-color: #6fbced;\n}\n#chat[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n}\n#chat[_ngcontent-%COMP%]   .you[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  border-color: transparent transparent #58b666 transparent;\n  margin-left: 15px;\n}\n#chat[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  border-color: transparent transparent #6fbced transparent;\n  margin-left: 375px;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  color: #212529;\n  background-color: #fff;\n  border-color: white;\n  outline: 0;\n  box-shadow: none !important;\n}\ntextarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: white !important;\n}\ntextarea[_ngcontent-%COMP%]:-moz-placeholder {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVEseUdBQUE7QUFDUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQURGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRkY7QUFJQTtFQUNFLFdBQUE7QUFERjtBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUFBO0VBQ0UsZ0JBQUE7QUFHRjtBQURBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFJRjtBQUZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBS0Y7QUFIQTtFQUNFLG1CQUFBO0FBTUY7QUFKQTtFQUNFLG1CQUFBO0FBT0Y7QUFMQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBUUY7QUFOQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVNGO0FBUEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBVUY7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBVUo7QUFSRTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtBQVdKO0FBVEU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0FBWUo7QUFWRTtFQUNFLFVBQUE7RUFDQSx3QkFBQTtBQWFKO0FBWEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFjSjtBQVpFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBZUo7QUFiRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFnQko7QUFKRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBT0o7QUFMRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBUUo7QUFORTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVNKO0FBUEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBVUo7QUFSRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBV0o7QUFURTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFZSjtBQVZFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBYUo7QUFYRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQWNKO0FBWkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFlSjtBQWJFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWdCSjtBQWRFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBaUJKO0FBZkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWtCSjtBQWhCRTtFQUNFLG1CQUFBO0FBbUJKO0FBakJFO0VBQ0UsZUFBQTtBQW9CSjtBQWxCRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFxQko7QUFuQkU7RUFDRyxjQUFBO0VBQ0EsbUJBQUE7QUFzQkw7QUFwQkU7RUFDRyxjQUFBO0VBQ0EsbUJBQUE7QUF1Qkw7QUFyQkU7RUFDRyxjQUFBO0VBQ0EsbUJBQUE7QUF3Qkw7QUF0QkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUF5Qko7QUF2QkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQTBCSjtBQXhCRSxhQUFBO0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBMkJKO0FBekJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUE0Qko7QUExQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQTZCSjtBQTNCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQThCSjtBQTVCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQStCSjtBQTdCRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBZ0NKO0FBOUJFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQWlDSjtBQS9CRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBa0NKO0FBaENFO0VBQ0UsbUJBQUE7QUFtQ0o7QUFoQ0UsY0FBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUFtQ0o7QUFqQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFvQ0o7QUFsQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBcUNKO0FBbkNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFzQ0o7QUFwQ0U7O0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQXVDSjtBQXJDRSwyQkFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0VBd0NKOztFQXRDRTtJQUNFLFlBQUE7RUF5Q0o7O0VBdkNFO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VBMENKOztFQXhDRTtJQUNFLCtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VBMkNKOztFQXpDRTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQTRDSjs7RUExQ0U7SUFDRSx5QkFBQTtJQUNBLFdBQUE7RUE2Q0o7QUFDRjtBQTNDRTtFQUNFO0lBQ0Usc0JBQUE7RUE2Q0o7O0VBM0NFO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUE4Q0o7O0VBNUNFO0lBQ0UsU0FBQTtFQStDSjtBQUNGO0FBN0NFO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLG1CQUFBO0VBK0NKO0FBQ0Y7QUE3Q0U7RUFDRTs7O0lBR0UsYUFBQTtFQStDSjs7RUE3Q0U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtFQWdESjs7RUE5Q0U7SUFDRSxZQUFBO0VBaURKO0FBQ0Y7QUEvQ0U7RUFDRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQWlESjs7RUEvQ0U7SUFDRSxhQUFBO0VBa0RKO0FBQ0Y7QUEvQ0U7RUFDRSw0REFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBaURKO0FBN0NFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZ0RKO0FBNUNFO0VBR0Usc0JBQUE7QUErQ0o7QUE3Q0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBR0EsOENBQUE7QUFnREo7QUE5Q0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFHQSx5QkFBQTtBQWlESjtBQS9DRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBa0RKO0FBaERFO0VBQ0UsZUFBQTtBQW1ESjtBQWpERTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQW9ESjtBQWxERTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBR0Esb0JBQUE7QUFxREo7QUFsREE7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0FBcUREO0FBbkRBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXNERDtBQXBEQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXVERDtBQXJEQTtFQUNDLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXdERDtBQXJEQTtFQUNDLGtCQUFBO0FBd0REO0FBdERBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEZBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUF5REQ7QUF2REE7RUFDQyxXQUFBO0FBMEREO0FBeERBO0VBQ0MsZUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQTJERDtBQXpEQTtFQUNDLGVBQUE7QUE0REQ7QUExREE7RUFDQyx5QkFBQTtBQTZERDtBQTNEQTtFQUNJLHlCQUFBO0FBOERKO0FBNURBO0VBQ0MsU0FBQTtBQStERDtBQTdEQTtFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWdFRDtBQTlEQTtFQUNDLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWlFRDtBQS9EQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWtFRDtBQWhFQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFtRUQ7QUFoRUE7RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQW1FRDtBQWpFQTtFQUNDLHlCQUFBO0FBb0VEO0FBbEVBO0VBQ0MseUJBQUE7QUFxRUQ7QUFuRUE7RUFDQyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXNFRDtBQW5FQTtFQUNDLGFBQUE7RUFDQSw0QkFBQTtBQXNFRDtBQXBFQTtFQUNDLHFCQUFBO0VBQ0EsbUJBQUE7QUF1RUQ7QUFyRUE7RUFDQyxrQkFBQTtBQXdFRDtBQXRFQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0FBeUVEO0FBdkVBO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQTBFRDtBQXhFQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtBQTJFRDtBQXpFQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUE0RUQ7QUF6RUE7RUFDQyxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDRyxZQUFBO0VBQ0gsMEJBQUE7RUFDQSw2QkFBQTtBQTRFRDtBQTFFQTtFQUNDLGtCQUFBO0FBNkVEO0FBM0VBO0VBQ0MscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUE4RUQ7QUE1RUE7RUFDQyxXQUFBO0FBK0VEO0FBN0VBO0VBQ0Msa0JBQUE7QUFnRkQ7QUE5RUE7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWlGRDtBQS9FQTtFQUNDLGlCQUFBO0FBa0ZEO0FBaEZBO0VBQ0MseUJBQUE7QUFtRkQ7QUFqRkE7RUFDQyx5QkFBQTtBQW9GRDtBQWxGQTtFQUNDLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXFGRDtBQW5GQTtFQUNFLHlEQUFBO0VBQ0EsaUJBQUE7QUFzRkY7QUFwRkE7RUFDRSx5REFBQTtFQUNBLGtCQUFBO0FBdUZGO0FBckZBO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUF3Rko7QUF0RkE7RUFDSSx1QkFBQTtBQXlGSjtBQXRGQTtFQUNJLHVCQUFBO0FBeUZKIiwiZmlsZSI6Im1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzA5ZGJhZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyLmFjdGl2ZXtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxze1xyXG4gIGhlaWdodDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlscyBpe1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxzIC5sb2dvX25hbWV7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rc3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGl7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYS5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogIzFhYzdhMTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzExZGJiYTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGl7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhIC5saW5rc19uYW1le1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyAubG9nX291dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaG9tZS1zZWN0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbntcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2IC5zaWRlYmFyLWJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgbmF2IC5zaWRlYmFyLWJ1dHRvbiBpe1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAuc2VhcmNoLWJveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxuLy8gICBuYXYgLnNlYXJjaC1ib3ggaW5wdXR7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xyXG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgI0VGRUVGMTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMTVweDtcclxuLy8gICB9XHJcbiAgbmF2IC5zZWFyY2gtYm94IC5ieC1zZWFyY2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwOWU0YjQ7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNCBlYXNlO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAucHJvZmlsZS1kZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0VGRUVGMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1pbi13aWR0aDogMTkwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAycHg7XHJcbiAgfVxyXG4gIG5hdiAucHJvZmlsZS1kZXRhaWxzIGltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIG5hdiAucHJvZmlsZS1kZXRhaWxzIC5hZG1pbl9uYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gLmhvbWUtY29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMDRweDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAub3ZlcnZpZXctYm94ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbiAgfVxyXG4gIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0IC0gMTVweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweCAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIH1cclxuICAub3ZlcnZpZXctYm94ZXMgLmJveC10b3BpY3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAubnVtYmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuaW5kaWNhdG9ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuaW5kaWNhdG9yIGl7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM4RkRBQ0I7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5ib3ggLmluZGljYXRvciBpLmRvd257XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTg3ZDg4O1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmluZGljYXRvciAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NlNWZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzY2YjBmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW46IC0xNXB4IDAgMCA2cHg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC50d297XHJcbiAgICAgY29sb3I6ICMyQkQ0N0Q7XHJcbiAgICAgYmFja2dyb3VuZDogI0MwRjJEODtcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC50aHJlZXtcclxuICAgICBjb2xvcjogI2ZmYzIzMztcclxuICAgICBiYWNrZ3JvdW5kOiAjZmZlOGIzO1xyXG4gICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0LmZvdXJ7XHJcbiAgICAgY29sb3I6ICNlMDUyNjA7XHJcbiAgICAgYmFja2dyb3VuZDogI2Y3ZDRkNztcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLnRvdGFsLW9yZGVye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLyogcGFkZGluZzogMCAyMHB4OyAqL1xyXG4gIH1cclxuICAvKiBsZWZ0IGJveCAqL1xyXG4gIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC5yZWNlbnQtc2FsZXN7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLmJveCAudGl0bGV7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxzIGxpLnRvcGlje1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxzIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlscyBsaSBhe1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDQwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5ib3ggLmJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b24gYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzBBMjU1ODtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b24gYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICAjMGRkNDg4O1xyXG4gIH1cclxuICBcclxuICAvKiBSaWdodCBib3ggKi9cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAudG9wLXNhbGVze1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgMjBweCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGkgYSBpbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGkgLnByb2R1Y3QsXHJcbiAgLnByaWNle1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAvKiBSZXNwb25zaXZlIE1lZGlhIFF1ZXJ5ICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNDBweCkge1xyXG4gICAgLnNpZGViYXJ7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIuYWN0aXZle1xyXG4gICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1zZWN0aW9ue1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9ue1xyXG4gICAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gMjIwcHgpOyAqL1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBsZWZ0OiAyMjBweDtcclxuICAgIH1cclxuICAgIC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyMHB4KTtcclxuICAgICAgbGVmdDogMjIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVze1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLmJveHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC50b3Atc2FsZXN7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLm92ZXJ2aWV3LWJveGVzIC5ib3h7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyIC0gMTVweCk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgbmF2IC5zaWRlYmFyLWJ1dHRvbiAuZGFzaGJvYXJkLFxyXG4gICAgbmF2IC5wcm9maWxlLWRldGFpbHMgLmFkbWluX25hbWUsXHJcbiAgICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpe1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtc2VjdGlvbiBuYXYgLnByb2ZpbGUtZGV0YWlsc3tcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlsc3tcclxuICAgICAgd2lkdGg6IDU2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb24gbmF2IC5wcm9maWxlLWRldGFpbHN7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIDpyb290IHtcclxuICAgIC0tYm9keS1iZzogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjdmYSAwJSwgI2MzY2ZlMiAxMDAlKTtcclxuICAgIC0tbXNnZXItYmc6ICNmZmY7XHJcbiAgICAtLWJvcmRlcjogMjNweCBzb2xpZCAjZGRkO1xyXG4gICAgLS1sZWZ0LW1zZy1iZzogI2VjZWNlYztcclxuICAgIC0tcmlnaHQtbXNnLWJnOiAjMjZmZjc5O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuTmVvbiB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG4gIC5OZW9uICoge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtZHJhZ0Ryb3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzQzcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgY29sb3I6ICM4ZDk0OTk7XHJcbiAgICBjb2xvcjogIzk3QTFBODtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI0M4Q0JDRTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LWRyYWdEcm9wIC5OZW9uLWlucHV0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAuTmVvbi1pbnB1dC10ZXh0IGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtdGV4dCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtY2hvb3NlLWJ0bi5ibHVlIHtcclxuICAgIGNvbG9yOiAjMDA4QkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOEJGRjtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtY2hvb3NlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzhkOTQ5NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIH1cclxuXHJcbmJvZHl7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojYWJkOWU5O1xyXG5cdGZvbnQtZmFtaWx5OkFyaWFsO1xyXG59XHJcbiNjb250YWluZXJ7XHJcblx0d2lkdGg6NzUwcHg7XHJcblx0aGVpZ2h0OjgwMHB4O1xyXG5cdGJhY2tncm91bmQ6I2VmZjNmNztcclxuXHRtYXJnaW46MCBhdXRvO1xyXG5cdGZvbnQtc2l6ZTowO1xyXG5cdGJvcmRlci1yYWRpdXM6NXB4O1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5hc2lkZXtcclxuXHR3aWR0aDoyNjBweDtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMzYjNlNDk7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOjE1cHg7XHJcblx0dmVydGljYWwtYWxpZ246dG9wO1xyXG59XHJcbm1haW57XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZToxNXB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOnRvcDtcclxufVxyXG5cclxuYXNpZGUgaGVhZGVye1xyXG5cdHBhZGRpbmc6MzBweCAyMHB4O1xyXG59XHJcbmFzaWRlIGlucHV0e1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OjUwcHg7XHJcblx0bGluZS1oZWlnaHQ6NTBweDtcclxuXHRwYWRkaW5nOjAgNTBweCAwIDIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojNWU2MTZhO1xyXG5cdGJvcmRlcjpub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6M3B4O1xyXG5cdGNvbG9yOiNmZmY7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE5NDAzMDYvaWNvX3NlYXJjaC5wbmcpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTcwcHg7XHJcblx0YmFja2dyb3VuZC1zaXplOiA0MHB4O1xyXG59XHJcbmFzaWRlIGlucHV0OjpwbGFjZWhvbGRlcntcclxuXHRjb2xvcjojZmZmO1xyXG59XHJcbmFzaWRlIHVse1xyXG5cdHBhZGRpbmctbGVmdDowO1xyXG5cdG1hcmdpbjowO1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG5cdG92ZXJmbG93LXk6c2Nyb2xsO1xyXG5cdGhlaWdodDo2OTBweDtcclxufVxyXG5hc2lkZSBsaXtcclxuXHRwYWRkaW5nOjEwcHggMDtcclxufVxyXG5hc2lkZSBsaTpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiM1ZTYxNmE7XHJcbn1cclxuLnNlbGVjdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTE1NjY4O1xyXG59XHJcbmgyLGgze1xyXG5cdG1hcmdpbjowO1xyXG59XHJcbmFzaWRlIGxpIGltZ3tcclxuXHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRtYXJnaW4tbGVmdDoyMHB4O1xyXG5cdG1hcmdpbi1yaWdodDo4cHg7XHJcbn1cclxuYXNpZGUgbGkgZGl2e1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdHZlcnRpY2FsLWFsaWduOnRvcDtcclxuXHRtYXJnaW4tdG9wOjEycHg7XHJcbn1cclxuYXNpZGUgbGkgaDJ7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0Y29sb3I6I2ZmZjtcclxuXHRmb250LXdlaWdodDpub3JtYWw7XHJcblx0bWFyZ2luLWJvdHRvbTo1cHg7XHJcbn1cclxuYXNpZGUgbGkgaDN7XHJcblx0Zm9udC1zaXplOjEycHg7XHJcblx0Y29sb3I6IzdlODE4YTtcclxuXHRmb250LXdlaWdodDpub3JtYWw7XHJcbn1cclxuXHJcbi5zdGF0dXN7XHJcblx0d2lkdGg6OHB4O1xyXG5cdGhlaWdodDo4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luLXJpZ2h0OjdweDtcclxufVxyXG4uZ3JlZW57XHJcblx0YmFja2dyb3VuZC1jb2xvcjojNThiNjY2O1xyXG59XHJcbi5vcmFuZ2V7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojZmY3MjVkO1xyXG59XHJcbi5ibHVle1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzZmYmNlZDtcclxuXHRtYXJnaW4tcmlnaHQ6MDtcclxuXHRtYXJnaW4tbGVmdDo3cHg7XHJcbn1cclxuXHJcbm1haW4gaGVhZGVye1xyXG5cdGhlaWdodDoxMTBweDtcclxuXHRwYWRkaW5nOjMwcHggMjBweCAzMHB4IDQwcHg7XHJcbn1cclxubWFpbiBoZWFkZXIgPiAqe1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdHZlcnRpY2FsLWFsaWduOnRvcDtcclxufVxyXG5tYWluIGhlYWRlciBpbWc6Zmlyc3QtY2hpbGR7XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcbn1cclxubWFpbiBoZWFkZXIgaW1nOmxhc3QtY2hpbGR7XHJcblx0d2lkdGg6MjRweDtcclxuXHRtYXJnaW4tdG9wOjhweDtcclxufVxyXG5tYWluIGhlYWRlciBkaXZ7XHJcblx0bWFyZ2luLWxlZnQ6MTBweDtcclxuXHRtYXJnaW4tcmlnaHQ6MTQ1cHg7XHJcbn1cclxubWFpbiBoZWFkZXIgaDJ7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0bWFyZ2luLWJvdHRvbTo1cHg7XHJcbn1cclxubWFpbiBoZWFkZXIgaDN7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cdGNvbG9yOiM3ZTgxOGE7XHJcbn1cclxuXHJcbiNjaGF0e1xyXG5cdHBhZGRpbmctbGVmdDowO1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG5cdG92ZXJmbG93LXk6IGF1dG87XHJcblx0aGVpZ2h0OiAzODBweDtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuXHRib3JkZXItdG9wOjJweCBzb2xpZCAjZmZmO1xyXG5cdGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNmZmY7XHJcbn1cclxuI2NoYXQgbGl7XHJcblx0cGFkZGluZzoxMHB4IDMwcHg7XHJcbn1cclxuI2NoYXQgaDIsI2NoYXQgaDN7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOjEzcHg7XHJcblx0Zm9udC13ZWlnaHQ6bm9ybWFsO1xyXG59XHJcbiNjaGF0IGgze1xyXG5cdGNvbG9yOiNiYmI7XHJcbn1cclxuI2NoYXQgLmVudGV0ZXtcclxuXHRtYXJnaW4tYm90dG9tOjVweDtcclxufVxyXG4jY2hhdCAubWVzc2FnZXtcclxuXHRwYWRkaW5nOjIwcHg7XHJcblx0Y29sb3I6I2ZmZjtcclxuXHRsaW5lLWhlaWdodDoyNXB4O1xyXG5cdG1heC13aWR0aDo5MCU7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdGJvcmRlci1yYWRpdXM6NXB4O1xyXG59XHJcbiNjaGF0IC5tZXtcclxuXHR0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcbiNjaGF0IC55b3UgLm1lc3NhZ2V7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojNThiNjY2O1xyXG59XHJcbiNjaGF0IC5tZSAubWVzc2FnZXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiM2ZmJjZWQ7XHJcbn1cclxuI2NoYXQgLnRyaWFuZ2xle1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci13aWR0aDogMCAxMHB4IDEwcHggMTBweDtcclxufVxyXG4jY2hhdCAueW91IC50cmlhbmdsZXtcclxuXHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzU4YjY2NiB0cmFuc3BhcmVudDtcclxuXHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcbn1cclxuI2NoYXQgLm1lIC50cmlhbmdsZXtcclxuXHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzZmYmNlZCB0cmFuc3BhcmVudDtcclxuXHRcdG1hcmdpbi1sZWZ0OjM3NXB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG50ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "ob2r":
/*!******************************************************************!*\
  !*** ./src/app/modules/dashboard/analytic/analytic.component.ts ***!
  \******************************************************************/
/*! exports provided: AnalyticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticComponent", function() { return AnalyticComponent; });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/user.service */ "qfBg");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/patient.service */ "7wfR");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "eLR9");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts-angular */ "kAVD");






class AnalyticComponent {
    constructor(userService, patientService) {
        this.userService = userService;
        this.patientService = patientService;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
        this.chartOptions = {
            series: [{
                    data: [2, 1, 2, 0],
                    type: 'line'
                }],
            title: {
                style: {
                    color: 'orange'
                },
                text: 'Chart Patient of malades'
            }
        };
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    getAll() {
        const user_id = JSON.parse(localStorage.getItem('user'))._id;
        this.userService.getAlls(user_id)
            .subscribe((res) => {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.user.consultations = res.consultations;
            this.user.patients = res.patients;
            this.user.malades = res.malades;
            this.nbPatient();
        });
    }
    nbPatient() {
        this.user.malades.map((malade, index) => {
            this.patientService.getPatientsOfMalade(malade._id)
                .subscribe((resp) => {
                this.user.malades[index].nbPatient = resp.patients.length;
            });
        });
    }
}
AnalyticComponent.ɵfac = function AnalyticComponent_Factory(t) { return new (t || AnalyticComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"])); };
AnalyticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnalyticComponent, selectors: [["app-analytic"]], decls: 13, vars: 4, consts: [[1, "home-section"], [1, "sidebar-button"], [1, "dashboard"], [1, "profile-details"], ["alt", "", 3, "src"], [1, "admin_name"], [1, "bx", "bx-chevron-down"], [1, "home-content"], [2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "options"]], template: function AnalyticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Analytic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "highcharts-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.user.photos[0].data, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Dr ", ctx.user.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 240px;\n  background: #09dbae;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: #fff;\n  min-width: 60px;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  height: 50px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: all 0.4s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #1ac7a1;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #11dbba;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: 60px;\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .log_out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f5f5f5;\n  min-height: 100vh;\n  width: calc(100% - 240px);\n  left: 240px;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  left: 60px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  width: calc(100% - 240px);\n  left: 240px;\n  z-index: 100;\n  padding: 0 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  left: 60px;\n  width: calc(100% - 60px);\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 10px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  max-width: 550px;\n  width: 100%;\n  margin: 0 20px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  font-size: 18px;\n  padding: 0 15px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background: #09e4b4;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 4px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  transition: all 0.4 ease;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  height: 50px;\n  min-width: 190px;\n  padding: 0 15px 0 2px;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 6px;\n  object-fit: cover;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  margin: 0 10px;\n  white-space: nowrap;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #333;\n}\n.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 104px;\n}\n.home-content[_ngcontent-%COMP%]   .overview-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  margin-bottom: 26px;\n}\n.overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: calc(100% / 4 - 15px);\n  background: #fff;\n  padding: 15px 14px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.overview-boxes[_ngcontent-%COMP%]   .box-topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 35px;\n  margin-top: -6px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background: #8FDACB;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 20px;\n  margin-right: 5px;\n}\n.box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i.down[_ngcontent-%COMP%] {\n  background: #e87d88;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  height: 50px;\n  width: 50px;\n  background: #cce5ff;\n  line-height: 50px;\n  text-align: center;\n  color: #66b0ff;\n  border-radius: 12px;\n  margin: -15px 0 0 6px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.two[_ngcontent-%COMP%] {\n  color: #2BD47D;\n  background: #C0F2D8;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.three[_ngcontent-%COMP%] {\n  color: #ffc233;\n  background: #ffe8b3;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.four[_ngcontent-%COMP%] {\n  color: #e05260;\n  background: #f7d4d7;\n}\n.home-content[_ngcontent-%COMP%]   .total-order[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  \n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .recent-sales[_ngcontent-%COMP%] {\n  width: 65%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  \n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li.topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n  font-size: 400;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #0A2558;\n  padding: 4px 12px;\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0dd488;\n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n  width: 35%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px 0 0;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin-right: 10px;\n  background: #333;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%], .price[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n  color: #333;\n}\n\n@media (max-width: 1240px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n    \n    overflow: hidden;\n    left: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 220px);\n    left: 220px;\n  }\n}\n@media (max-width: 1150px) {\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: scroll;\n    margin-bottom: 30px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 1000px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: calc(100% / 2 - 15px);\n    margin-bottom: 15px;\n  }\n}\n@media (max-width: 700px) {\n  nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    height: 50px;\n    min-width: 40px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n    width: 560px;\n  }\n}\n@media (max-width: 550px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  --msger-bg: #fff;\n  --border: 23px solid #ddd;\n  --left-msg-bg: #ececec;\n  --right-msg-bg: #26ff79;\n}\n.Neon[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #494949;\n  position: relative;\n}\n.Neon[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%] {\n  display: block;\n  width: 343px;\n  margin: 0 auto 25px auto;\n  padding: 25px;\n  color: #8d9499;\n  color: #97A1A8;\n  background: #fff;\n  border: 2px dashed #C8CBCE;\n  text-align: center;\n  transition: box-shadow 0.3s, border-color 0.3s;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%]   .Neon-input-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-top: -10px;\n  transition: all 0.3s ease;\n}\n.Neon-input-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n.Neon-input-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.Neon-input-choose-btn.blue[_ngcontent-%COMP%] {\n  color: #008BFF;\n  border: 1px solid #008BFF;\n}\n.Neon-input-choose-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 14px;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: bold;\n  color: #8d9496;\n  border-radius: 3px;\n  border: 1px solid #c6c6c6;\n  vertical-align: middle;\n  background-color: #fff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYW5hbHl0aWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUdBQUE7QUFDUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFQTtFQUNFLFdBQUE7QUFDRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQUZBO0VBQ0UsZ0JBQUE7QUFLRjtBQUhBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFNRjtBQUpBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBT0Y7QUFMQTtFQUNFLG1CQUFBO0FBUUY7QUFOQTtFQUNFLG1CQUFBO0FBU0Y7QUFQQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBVUY7QUFSQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVdGO0FBVEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBWUY7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBWUo7QUFWRTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtBQWFKO0FBWEU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7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QTtFQThESjtBQUNGO0FBNURFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7RUE4REo7O0VBNURFO0lBQ0UsYUFBQTtFQStESjtBQUNGO0FBNURFO0VBQ0UsNERBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQThESjtBQTFERTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTZESjtBQXpERTtFQUdFLHNCQUFBO0FBNERKO0FBMURFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUdBLDhDQUFBO0FBNkRKO0FBM0RFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBR0EseUJBQUE7QUE4REo7QUE1REU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQStESjtBQTdERTtFQUNFLGVBQUE7QUFnRUo7QUE5REU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFpRUo7QUEvREU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUdBLG9CQUFBO0FBa0VKIiwiZmlsZSI6ImFuYWx5dGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5zaWRlYmFye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwOWRiYWU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG4uc2lkZWJhci5hY3RpdmV7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlsc3tcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zaWRlYmFyIC5sb2dvLWRldGFpbHMgaXtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlscyAubG9nb19uYW1le1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3N7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGF7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGEuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICMxYWM3YTE7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICMxMWRiYmE7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBpe1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYSAubGlua3NfbmFtZXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgLmxvZ19vdXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvbWUtc2VjdGlvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgfVxyXG4gIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb257XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjQwcHgpO1xyXG4gICAgbGVmdDogMjQwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbiBuYXZ7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAuc2lkZWJhci1idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIG5hdiAuc2lkZWJhci1idXR0b24gaXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmhvbWUtc2VjdGlvbiBuYXYgLnNlYXJjaC1ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICB9XHJcbiAgbmF2IC5zZWFyY2gtYm94IGlucHV0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjZGQTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFRkVFRjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG4gIG5hdiAuc2VhcmNoLWJveCAuYngtc2VhcmNoe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDllNGI0O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjQgZWFzZTtcclxuICB9XHJcbiAgLmhvbWUtc2VjdGlvbiBuYXYgLnByb2ZpbGUtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjZGQTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFRkVFRjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE5MHB4O1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgMnB4O1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyAuYWRtaW5fbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgbmF2IC5wcm9maWxlLWRldGFpbHMgaXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIC5ob21lLWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTA0cHg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLm92ZXJ2aWV3LWJveGVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gIH1cclxuICAub3ZlcnZpZXctYm94ZXMgLmJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNCAtIDE1cHgpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE1cHggMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9XHJcbiAgLm92ZXJ2aWV3LWJveGVzIC5ib3gtdG9waWN7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLm51bWJlcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmluZGljYXRvcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmluZGljYXRvciBpe1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEZEQUNCO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICAuYm94IC5pbmRpY2F0b3IgaS5kb3due1xyXG4gICAgYmFja2dyb3VuZDogI2U4N2Q4ODtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5pbmRpY2F0b3IgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2NjZTVmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM2NmIwZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAtMTVweCAwIDAgNnB4O1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmNhcnQudHdve1xyXG4gICAgIGNvbG9yOiAjMkJENDdEO1xyXG4gICAgIGJhY2tncm91bmQ6ICNDMEYyRDg7XHJcbiAgIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmNhcnQudGhyZWV7XHJcbiAgICAgY29sb3I6ICNmZmMyMzM7XHJcbiAgICAgYmFja2dyb3VuZDogI2ZmZThiMztcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC5mb3Vye1xyXG4gICAgIGNvbG9yOiAjZTA1MjYwO1xyXG4gICAgIGJhY2tncm91bmQ6ICNmN2Q0ZDc7XHJcbiAgIH1cclxuICAuaG9tZS1jb250ZW50IC50b3RhbC1vcmRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC8qIHBhZGRpbmc6IDAgMjBweDsgKi9cclxuICB9XHJcbiAgLyogbGVmdCBib3ggKi9cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAucmVjZW50LXNhbGVze1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLnNhbGVzLWRldGFpbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5ib3ggLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDEwcHg7ICovXHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlscyBsaS50b3BpY3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlscyBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLnNhbGVzLWRldGFpbHMgbGkgYXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiA0MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLmJveCAuYnV0dG9uIGF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMwQTI1NTg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLmJveCAuYnV0dG9uIGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAgIzBkZDQ4ODtcclxuICB9XHJcbiAgXHJcbiAgLyogUmlnaHQgYm94ICovXHJcbiAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLnRvcC1zYWxlc3tcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLnRvcC1zYWxlcyBsaXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIGEgaW1ne1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLnRvcC1zYWxlcyBsaSBhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIC5wcm9kdWN0LFxyXG4gIC5wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgLyogUmVzcG9uc2l2ZSBNZWRpYSBRdWVyeSAqL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjQwcHgpIHtcclxuICAgIC5zaWRlYmFye1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyLmFjdGl2ZXtcclxuICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWUtc2VjdGlvbntcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbntcclxuICAgICAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIDIyMHB4KTsgKi9cclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbGVmdDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbiBuYXZ7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweCk7XHJcbiAgICAgIGxlZnQ6IDIyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlc3tcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC5ib3h7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAudG9wLXNhbGVze1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC8gMiAtIDE1cHgpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIG5hdiAuc2lkZWJhci1idXR0b24gLmRhc2hib2FyZCxcclxuICAgIG5hdiAucHJvZmlsZS1kZXRhaWxzIC5hZG1pbl9uYW1lLFxyXG4gICAgbmF2IC5wcm9maWxlLWRldGFpbHMgaXtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5ob21lLXNlY3Rpb24gbmF2IC5wcm9maWxlLWRldGFpbHN7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLnNhbGVzLWRldGFpbHN7XHJcbiAgICAgIHdpZHRoOiA1NjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAub3ZlcnZpZXctYm94ZXMgLmJveHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdiAucHJvZmlsZS1kZXRhaWxze1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICA6cm9vdCB7XHJcbiAgICAtLWJvZHktYmc6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNWY3ZmEgMCUsICNjM2NmZTIgMTAwJSk7XHJcbiAgICAtLW1zZ2VyLWJnOiAjZmZmO1xyXG4gICAgLS1ib3JkZXI6IDIzcHggc29saWQgI2RkZDtcclxuICAgIC0tbGVmdC1tc2ctYmc6ICNlY2VjZWM7XHJcbiAgICAtLXJpZ2h0LW1zZy1iZzogIzI2ZmY3OTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLk5lb24ge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICAuTmVvbiAqIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LWRyYWdEcm9wIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDM0M3B4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMjVweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGNvbG9yOiAjOGQ5NDk5O1xyXG4gICAgY29sb3I6ICM5N0ExQTg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNDOENCQ0U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xyXG4gIH1cclxuICAuTmVvbi1pbnB1dC1kcmFnRHJvcCAuTmVvbi1pbnB1dC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtdGV4dCBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LXRleHQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LWNob29zZS1idG4uYmx1ZSB7XHJcbiAgICBjb2xvcjogIzAwOEJGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDhCRkY7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LWNob29zZS1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM4ZDk0OTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzZjNmM2O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICB9Il19 */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class UserService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super('/users', http);
    }
    getAlls(_id) {
        return this.http.get(this.url + '/getAll?_id=' + _id);
    }
    getUser(_id) {
        return this.http.get(this.url + '/getUser?_id=' + _id);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sJ+F":
/*!****************************************************************!*\
  !*** ./src/app/modules/dashboard/paients/paients.component.ts ***!
  \****************************************************************/
/*! exports provided: PaientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaientsComponent", function() { return PaientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/user.service */ "qfBg");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/patient.service */ "7wfR");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "eLR9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.component */ "dAdV");






function PaientsComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaientsComponent_tr_44_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const patient_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r4.patientEdit = patient_r2; return ctx_r4.addPatient = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\uE254");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaientsComponent_tr_44_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const patient_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r6.patientDeleted = patient_r2; return ctx_r6.addPatient = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\uE872");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", index_r3 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patient_r2.nom + " " + patient_r2.prenom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patient_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patient_r2.phone);
} }
function PaientsComponent_app_modal_45_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveModel", function PaientsComponent_app_modal_45_Template_app_modal_saveModel_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.save($event); })("deleteElement", function PaientsComponent_app_modal_45_Template_app_modal_deleteElement_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteP(); })("closeModel", function PaientsComponent_app_modal_45_Template_app_modal_closeModel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addPatient = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementDeleted", ctx_r1.patientDeleted)("type", "patient")("element", ctx_r1.patientEdit);
} }
class PaientsComponent {
    constructor(userService, patientService) {
        this.userService = userService;
        this.patientService = patientService;
        this.addPatient = false;
        this.patients = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.getPatients();
    }
    getPatients() {
        this.userService.getAlls(this.user._id)
            .subscribe((resp) => {
            this.patients = resp.patients;
        });
    }
    save(patient) {
        console.log(patient);
        if (patient._id) {
            this.patientService.modifyPatient(patient).
                subscribe((resp) => {
                console.log(resp);
                const index = this.patients.findIndex(pat => pat._id == patient._id);
                this.patients[index] = patient;
            });
        }
        else {
            this.patientService.addPatient(patient, this.user._id).
                subscribe((resp) => {
                console.log(resp);
                this.patients.push(patient);
            });
        }
    }
    deleteP() {
        this.patientService.deletePatient(this.patientDeleted._id, this.user._id)
            .subscribe((resp) => {
            const index = this.patients.findIndex(patient => patient == this.patientDeleted);
            this.patients.splice(index, 1);
        });
    }
}
PaientsComponent.ɵfac = function PaientsComponent_Factory(t) { return new (t || PaientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"])); };
PaientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaientsComponent, selectors: [["app-paients"]], decls: 46, vars: 4, consts: [["rel", "stylesheet", "href", "https://fonts.googleapis.com/css?family=Roboto|Varela+Round"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/icon?family=Material+Icons"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "home-section"], [1, "sidebar-button"], [1, "dashboard"], [1, "profile-details"], ["alt", "", 3, "src"], [1, "admin_name"], [1, "bx", "bx-chevron-down"], [1, "home-content"], [1, "container"], [1, "table-wrapper"], [1, "table-title"], [1, "row"], [1, "col-sm-6"], [1, "btn", "btn-success", "p-2", 3, "click"], [1, "material-icons"], [1, "table", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], [3, "elementDeleted", "type", "element", "saveModel", "deleteElement", "closeModel", 4, "ngIf"], [1, "edit", "cursor-pointer", 3, "click"], ["data-toggle", "tooltip", "title", "Edit", 1, "material-icons"], [1, "delete", 3, "click"], ["data-toggle", "tooltip", "title", "Delete", 1, "material-icons", "cursor-pointer"], [3, "elementDeleted", "type", "element", "saveModel", "deleteElement", "closeModel"]], template: function PaientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaientsComponent_Template_a_click_25_listener() { ctx.addPatient = true; return ctx.patientEdit = undefined; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\uE147");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Add New Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PaientsComponent_tr_44_Template, 16, 4, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, PaientsComponent_app_modal_45_Template, 1, 3, "app-modal", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.photos[0].data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dr ", ctx.user.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.patients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addPatient);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 240px;\n  background: #09dbae;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: #fff;\n  min-width: 60px;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  height: 50px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: all 0.4s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #1ac7a1;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #11dbba;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: 60px;\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .log_out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f5f5f5;\n  min-height: 100vh;\n  width: calc(100% - 240px);\n  left: 240px;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  left: 60px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  width: calc(100% - 240px);\n  left: 240px;\n  z-index: 100;\n  padding: 0 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  left: 60px;\n  width: calc(100% - 60px);\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 10px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  max-width: 550px;\n  width: 100%;\n  margin: 0 20px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  font-size: 18px;\n  padding: 0 15px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background: #09e4b4;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 4px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  transition: all 0.4 ease;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  height: 50px;\n  min-width: 190px;\n  padding: 0 15px 0 2px;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 6px;\n  object-fit: cover;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  margin: 0 10px;\n  white-space: nowrap;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #333;\n}\n.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 104px;\n}\n.home-content[_ngcontent-%COMP%]   .overview-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  margin-bottom: 26px;\n}\nbody[_ngcontent-%COMP%] {\n  color: #566787;\n  background: #f5f5f5;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 13px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px 25px;\n  margin: 30px 0;\n  border-radius: 1px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  color: #fff;\n  padding: 16px 30px;\n  margin: -20px -25px 10px;\n  border-radius: 1px 1px 0 0;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 24px;\n}\n.table-title[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  float: right;\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #fff;\n  float: right;\n  font-size: 13px;\n  border: none;\n  min-width: 50px;\n  border-radius: 1px;\n  border: none;\n  outline: none !important;\n  margin-left: 10px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 21px;\n  margin-right: 5px;\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 2px;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-color: #e9e9e9;\n  padding: 12px 15px;\n  vertical-align: middle;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 60px;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 100px;\n}\ntable.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background-color: #fcfcfc;\n}\ntable.table-striped.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0 5px;\n  cursor: pointer;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   i[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  font-size: 22px;\n  margin: 0 5px;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #566787;\n  display: inline-block;\n  text-decoration: none;\n  outline: none !important;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2196F3;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.edit[_ngcontent-%COMP%] {\n  color: #FFC107;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.delete[_ngcontent-%COMP%] {\n  color: #F44336;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\ntable.table[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.pagination[_ngcontent-%COMP%] {\n  float: right;\n  margin: 0 0 5px;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 13px;\n  min-width: 30px;\n  min-height: 30px;\n  color: #999;\n  margin: 0 2px;\n  line-height: 30px;\n  border-radius: 1px !important;\n  text-align: center;\n  padding: 0 6px;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a.page-link[_ngcontent-%COMP%] {\n  background: #03A9F4;\n}\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0397d6;\n}\n.pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-top: 6px;\n}\n.hint-text[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.custom-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  margin: 5px 0 0 3px;\n  z-index: 9;\n}\n.custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  width: 18px;\n  height: 18px;\n}\n.custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  content: \"\";\n  margin-right: 10px;\n  display: inline-block;\n  vertical-align: text-top;\n  background: white;\n  border: 1px solid #bbb;\n  border-radius: 1px;\n  box-sizing: border-box;\n  z-index: 2;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 6px;\n  top: 3px;\n  width: 6px;\n  height: 11px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: inherit;\n  z-index: 3;\n  transform: rotateZ(45deg);\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  border-color: #03A9F4;\n  background: #03A9F4;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  border-color: #fff;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%]:before {\n  color: #b8b8b8;\n  cursor: auto;\n  box-shadow: none;\n  background: #ddd;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 1px;\n}\n.modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  background: #ecf0f1;\n  border-radius: 0 0 1px 1px;\n}\n.modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.modal[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  box-shadow: none;\n  border-color: #dddddd;\n}\n.modal[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.modal[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  min-width: 100px;\n}\n.modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFpZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5R0FBQTtBQUNSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlGO0FBRkE7RUFDRSxnQkFBQTtBQUtGO0FBSEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQU1GO0FBSkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFPRjtBQUxBO0VBQ0UsbUJBQUE7QUFRRjtBQU5BO0VBQ0UsbUJBQUE7QUFTRjtBQVBBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFVRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBV0Y7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFZRjtBQVRBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFZSjtBQVZFO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0FBYUo7QUFYRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtF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QUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF1RUE7QUFyRUE7RUFDQSxtQkFBQTtBQXdFQSIsImZpbGUiOiJwYWllbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5zaWRlYmFye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwOWRiYWU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG4uc2lkZWJhci5hY3RpdmV7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlsc3tcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zaWRlYmFyIC5sb2dvLWRldGFpbHMgaXtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlscyAubG9nb19uYW1le1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3N7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGF7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGEuYWN0aXZle1xyXG4gIGJhY2tncm91bmQ6ICMxYWM3YTE7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICMxMWRiYmE7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBpe1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYSAubGlua3NfbmFtZXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgLmxvZ19vdXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvbWUtc2VjdGlvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgfVxyXG4gIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb257XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjQwcHgpO1xyXG4gICAgbGVmdDogMjQwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbiBuYXZ7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAuc2lkZWJhci1idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIG5hdiAuc2lkZWJhci1idXR0b24gaXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmhvbWUtc2VjdGlvbiBuYXYgLnNlYXJjaC1ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICB9XHJcbiAgbmF2IC5zZWFyY2gtYm94IGlucHV0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjZGQTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFRkVFRjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG4gIG5hdiAuc2VhcmNoLWJveCAuYngtc2VhcmNoe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDllNGI0O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjQgZWFzZTtcclxuICB9XHJcbiAgLmhvbWUtc2VjdGlvbiBuYXYgLnByb2ZpbGUtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjZGQTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFRkVFRjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE5MHB4O1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgMnB4O1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyAuYWRtaW5fbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgbmF2IC5wcm9maWxlLWRldGFpbHMgaXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIC5ob21lLWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTA0cHg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLm92ZXJ2aWV3LWJveGVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGNvbG9yOiAjNTY2Nzg3O1xyXG5iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG5mb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4udGFibGUtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbmJvcmRlci1yYWRpdXM6MXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNDcpO1xyXG59XHJcbi50YWJsZS10aXRsZSB7ICAgICAgICBcclxucGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjZmZmO1xyXG5wYWRkaW5nOiAxNnB4IDMwcHg7XHJcbm1hcmdpbjogLTIwcHggLTI1cHggMTBweDtcclxuYm9yZGVyLXJhZGl1czogMXB4IDFweCAwIDA7XHJcbmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQ3KTtcclxufVxyXG4udGFibGUtdGl0bGUgaDIge1xyXG5tYXJnaW46IDVweCAwIDA7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4udGFibGUtdGl0bGUgLmJ0bi1ncm91cCB7XHJcbmZsb2F0OiByaWdodDtcclxufVxyXG4udGFibGUtdGl0bGUgLmJ0biB7XHJcbmNvbG9yOiAjZmZmO1xyXG5mbG9hdDogcmlnaHQ7XHJcbmZvbnQtc2l6ZTogMTNweDtcclxuYm9yZGVyOiBub25lO1xyXG5taW4td2lkdGg6IDUwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDFweDtcclxuYm9yZGVyOiBub25lO1xyXG5vdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI0Nyk7XHJcbn1cclxuLnRhYmxlLXRpdGxlIC5idG4gaSB7XHJcbmZsb2F0OiBsZWZ0O1xyXG5mb250LXNpemU6IDIxcHg7XHJcbm1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi50YWJsZS10aXRsZSAuYnRuIHNwYW4ge1xyXG5mbG9hdDogbGVmdDtcclxubWFyZ2luLXRvcDogMnB4O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRyIHRoLCB0YWJsZS50YWJsZSB0ciB0ZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlOWU5ZTk7XHJcbnBhZGRpbmc6IDEycHggMTVweDtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG50YWJsZS50YWJsZSB0ciB0aDpmaXJzdC1jaGlsZCB7XHJcbndpZHRoOiA2MHB4O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRyIHRoOmxhc3QtY2hpbGQge1xyXG53aWR0aDogMTAwcHg7XHJcbn1cclxudGFibGUudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbn1cclxudGFibGUudGFibGUtc3RyaXBlZC50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XHJcbmJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxudGFibGUudGFibGUgdGggaSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IFxyXG50YWJsZS50YWJsZSB0ZDpsYXN0LWNoaWxkIGkge1xyXG5vcGFjaXR5OiAwLjk7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbn1cclxudGFibGUudGFibGUgdGQgYSB7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5jb2xvcjogIzU2Njc4NztcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbm91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBhOmhvdmVyIHtcclxuY29sb3I6ICMyMTk2RjM7XHJcbn1cclxudGFibGUudGFibGUgdGQgYS5lZGl0IHtcclxuICAgIGNvbG9yOiAjRkZDMTA3O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGEuZGVsZXRlIHtcclxuICAgIGNvbG9yOiAjRjQ0MzM2O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGkge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcbnRhYmxlLnRhYmxlIC5hdmF0YXIge1xyXG5ib3JkZXItcmFkaXVzOiAxcHg7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbm1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDAgMCA1cHg7XHJcbn1cclxuLnBhZ2luYXRpb24gbGkgYSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG59XHJcbi5wYWdpbmF0aW9uIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn0gXHJcbi5wYWdpbmF0aW9uIGxpLmFjdGl2ZSBhLCAucGFnaW5hdGlvbiBsaS5hY3RpdmUgYS5wYWdlLWxpbmsge1xyXG4gICAgYmFja2dyb3VuZDogIzAzQTlGNDtcclxufVxyXG4ucGFnaW5hdGlvbiBsaS5hY3RpdmUgYTpob3ZlciB7ICAgICAgICBcclxuICAgIGJhY2tncm91bmQ6ICMwMzk3ZDY7XHJcbn1cclxuLnBhZ2luYXRpb24gbGkuZGlzYWJsZWQgaSB7XHJcbiAgICBjb2xvcjogI2NjYztcclxufVxyXG4ucGFnaW5hdGlvbiBsaSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHhcclxufVxyXG4uaGludC10ZXh0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufSAgICBcclxuLyogQ3VzdG9tIGNoZWNrYm94ICovXHJcbi5jdXN0b20tY2hlY2tib3gge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0geyAgICBcclxub3BhY2l0eTogMDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5tYXJnaW46IDVweCAwIDAgM3B4O1xyXG56LWluZGV4OiA5O1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggbGFiZWw6YmVmb3Jle1xyXG53aWR0aDogMThweDtcclxuaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcclxuY29udGVudDogJyc7XHJcbm1hcmdpbi1yaWdodDogMTBweDtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG52ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbmJhY2tncm91bmQ6IHdoaXRlO1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xyXG5ib3JkZXItcmFkaXVzOiAxcHg7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbnotaW5kZXg6IDI7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuY29udGVudDogJyc7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogNnB4O1xyXG50b3A6IDNweDtcclxud2lkdGg6IDZweDtcclxuaGVpZ2h0OiAxMXB4O1xyXG5ib3JkZXI6IHNvbGlkICMwMDA7XHJcbmJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbnRyYW5zZm9ybTogaW5oZXJpdDtcclxuei1pbmRleDogMztcclxudHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxufVxyXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuYm9yZGVyLWNvbG9yOiAjMDNBOUY0O1xyXG5iYWNrZ3JvdW5kOiAjMDNBOUY0O1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbmJvcmRlci1jb2xvcjogI2ZmZjtcclxufVxyXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCArIGxhYmVsOmJlZm9yZSB7XHJcbmNvbG9yOiAjYjhiOGI4O1xyXG5jdXJzb3I6IGF1dG87XHJcbmJveC1zaGFkb3c6IG5vbmU7XHJcbmJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuLyogTW9kYWwgc3R5bGVzICovXHJcbi5tb2RhbCAubW9kYWwtZGlhbG9nIHtcclxubWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG4ubW9kYWwgLm1vZGFsLWhlYWRlciwgLm1vZGFsIC5tb2RhbC1ib2R5LCAubW9kYWwgLm1vZGFsLWZvb3RlciB7XHJcbnBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG5ib3JkZXItcmFkaXVzOiAxcHg7XHJcbn1cclxuLm1vZGFsIC5tb2RhbC1mb290ZXIge1xyXG5iYWNrZ3JvdW5kOiAjZWNmMGYxO1xyXG5ib3JkZXItcmFkaXVzOiAwIDAgMXB4IDFweDtcclxufVxyXG4ubW9kYWwgLm1vZGFsLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubW9kYWwgLmZvcm0tY29udHJvbCB7XHJcbmJvcmRlci1yYWRpdXM6IDFweDtcclxuYm94LXNoYWRvdzogbm9uZTtcclxuYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xyXG59XHJcbi5tb2RhbCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG5yZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcbi5tb2RhbCAuYnRuIHtcclxuYm9yZGVyLXJhZGl1czogMXB4O1xyXG5taW4td2lkdGg6IDEwMHB4O1xyXG59IFxyXG4ubW9kYWwgZm9ybSBsYWJlbCB7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn0gIl19 */"] });


/***/ }),

/***/ "sMYi":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/home-content/home-content.component.ts ***!
  \**************************************************************************/
/*! exports provided: HomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function() { return HomeContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/user.service */ "qfBg");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/patient.service */ "7wfR");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "eLR9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _traitement_malade_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../traitement-malade/pdf/pdf.component */ "BI9a");
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/date-format.pipe */ "u7Z3");








const _c0 = function (a0) { return { malade_id: a0 }; };
function HomeContentComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const malade_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/traitementMalade")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, malade_r5._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", malade_r5.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", malade_r5.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", malade_r5.nbPatient, " ");
} }
function HomeContentComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const consult_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, consult_r6.date));
} }
function HomeContentComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", patient_r7.patient.nom, " ", patient_r7.patient.prenom, "");
} }
function HomeContentComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const malade_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", malade_r8.malade.nom, " ");
} }
function HomeContentComponent_li_40_app_pdf_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pdf", 31);
} if (rf & 2) {
    const patient_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("doctorName", ctx_r10.user.nom + " " + ctx_r10.user.prenom)("patientName", patient_r9.patient.nom + " " + patient_r9.patient.prenom);
} }
function HomeContentComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_li_40_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.downloadRapport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "RAPPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeContentComponent_li_40_app_pdf_7_Template, 1, 2, "app-pdf", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", patient_r9.patient.nom, " ", patient_r9.patient.prenom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.download);
} }
class HomeContentComponent {
    constructor(userService, patientService) {
        this.userService = userService;
        this.patientService = patientService;
        this.mesPatients = [];
        this.download = false;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.src = this.user.photos[0].data;
        console.log(this.src.length);
        this.getAll();
    }
    getAll() {
        const user_id = JSON.parse(localStorage.getItem('user'))._id;
        this.userService.getAlls(user_id)
            .subscribe((res) => {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.user.consultations = res.consultations;
            this.user.patients = res.patients;
            this.user.malades = res.malades;
            this.nbPatient();
            this.getEtatAndDate();
        });
    }
    getEtatAndDate() {
        this.user.patients.map((patient) => {
            patient.malades.map((malade_id) => {
                this.user.consultations.map((consult) => {
                    if (consult.malade == malade_id) {
                        let nomMalade = this.user.malades[this.user.malades.findIndex(malade => malade._id.toString() == malade_id.toString())];
                        this.mesPatients.push({
                            patient: patient,
                            etat: consult.etat,
                            malade: nomMalade,
                            date: consult.updatedAt,
                            consult: consult
                        });
                    }
                });
            });
        });
    }
    nbPatient() {
        this.user.malades.map((malade, index) => {
            this.patientService.getPatientsOfMalade(malade._id)
                .subscribe((resp) => {
                this.user.malades[index].nbPatient = resp.patients.length;
            });
        });
    }
    downloadRapport() {
        this.download = true;
    }
}
HomeContentComponent.ɵfac = function HomeContentComponent_Factory(t) { return new (t || HomeContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"])); };
HomeContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeContentComponent, selectors: [["app-home-content"]], decls: 41, vars: 7, consts: [[1, "home-section"], [1, "sidebar-button"], [1, "bx", "bx-menu", "sidebarBtn"], [1, "dashboard"], [1, "profile-details"], ["width", "50", "alt", "", 3, "src"], [1, "admin_name"], [1, "bx", "bx-chevron-down"], [1, "home-content"], [1, "overview-boxes"], ["class", "box", 4, "ngFor", "ngForOf"], [1, "sales-boxes"], [1, "recent-sales", "box"], [1, "title"], [1, "sales-details"], [1, "details"], [1, "topic"], [4, "ngFor", "ngForOf"], [1, "button"], ["href", "#"], [1, "top-sales", "box"], [1, "top-sales-details"], [1, "box"], [1, "right-side", "text-center", "cursor-pointer", 3, "routerLink", "queryParams"], [1, "box-topic"], ["alt", "", "width", "90", "height", "70", "border-radius", " 8px", 3, "src"], [1, "number", "mx-1"], ["src", "../../../../assets/imgs/avatar.jpg", "width", "50", "alt", ""], [1, "product"], [1, "price", "cursor-pointer", "text-info", 3, "click"], ["hidden", "", "style", "opacity: 0; position: absolute;", 3, "doctorName", "patientName", 4, "ngIf"], ["hidden", "", 2, "opacity", "0", "position", "absolute", 3, "doctorName", "patientName"]], template: function HomeContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeContentComponent_div_14_Template, 7, 7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mes patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeContentComponent_li_24_Template, 3, 3, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nom patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomeContentComponent_li_28_Template, 2, 2, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Secteur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HomeContentComponent_li_32_Template, 2, 1, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Derniere Consultations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HomeContentComponent_li_40_Template, 8, 3, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dr ", ctx.user.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user.malades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mesPatients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mesPatients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mesPatients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mesPatients);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _traitement_malade_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_6__["PdfComponent"]], pipes: [_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__["DateFormatPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 240px;\n  background: #09dbae;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: #fff;\n  min-width: 60px;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  height: 50px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: all 0.4s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #1ac7a1;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #11dbba;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: 60px;\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .log_out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f5f5f5;\n  min-height: 100vh;\n  width: calc(100% - 240px);\n  left: 240px;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  left: 60px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  width: calc(100% - 240px);\n  left: 240px;\n  z-index: 100;\n  padding: 0 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  left: 60px;\n  width: calc(100% - 60px);\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 10px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  max-width: 550px;\n  width: 100%;\n  margin: 0 20px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  font-size: 18px;\n  padding: 0 15px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background: #09e4b4;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 4px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  transition: all 0.4 ease;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  height: 50px;\n  min-width: 190px;\n  padding: 0 15px 0 2px;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 6px;\n  object-fit: cover;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  margin: 0 10px;\n  white-space: nowrap;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #333;\n}\n.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 104px;\n}\n.home-content[_ngcontent-%COMP%]   .overview-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  margin-bottom: 26px;\n}\n.overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: calc(100% / 4 - 15px);\n  background: #fff;\n  padding: 15px 14px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.overview-boxes[_ngcontent-%COMP%]   .box-topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 35px;\n  margin-top: -6px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background: #8FDACB;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 20px;\n  margin-right: 5px;\n}\n.box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i.down[_ngcontent-%COMP%] {\n  background: #e87d88;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  height: 50px;\n  width: 50px;\n  background: #cce5ff;\n  line-height: 50px;\n  text-align: center;\n  color: #66b0ff;\n  border-radius: 12px;\n  margin: -15px 0 0 6px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.two[_ngcontent-%COMP%] {\n  color: #2BD47D;\n  background: #C0F2D8;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.three[_ngcontent-%COMP%] {\n  color: #ffc233;\n  background: #ffe8b3;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.four[_ngcontent-%COMP%] {\n  color: #e05260;\n  background: #f7d4d7;\n}\n.home-content[_ngcontent-%COMP%]   .total-order[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  \n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .recent-sales[_ngcontent-%COMP%] {\n  width: 65%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  \n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li.topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n  font-size: 400;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #0A2558;\n  padding: 4px 12px;\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0dd488;\n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n  width: 35%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px 0 0;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin-right: 10px;\n  background: #333;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%], .price[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n  color: #333;\n}\n\n@media (max-width: 1240px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n    \n    overflow: hidden;\n    left: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 220px);\n    left: 220px;\n  }\n}\n@media (max-width: 1150px) {\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: scroll;\n    margin-bottom: 30px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 1000px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: calc(100% / 2 - 15px);\n    margin-bottom: 15px;\n  }\n}\n@media (max-width: 700px) {\n  nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    height: 50px;\n    min-width: 40px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n    width: 560px;\n  }\n}\n@media (max-width: 550px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  --msger-bg: #fff;\n  --border: 23px solid #ddd;\n  --left-msg-bg: #ececec;\n  --right-msg-bg: #26ff79;\n}\n.Neon[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #494949;\n  position: relative;\n}\n.Neon[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%] {\n  display: block;\n  width: 343px;\n  margin: 0 auto 25px auto;\n  padding: 25px;\n  color: #8d9499;\n  color: #97A1A8;\n  background: #fff;\n  border: 2px dashed #C8CBCE;\n  text-align: center;\n  transition: box-shadow 0.3s, border-color 0.3s;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%]   .Neon-input-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-top: -10px;\n  transition: all 0.3s ease;\n}\n.Neon-input-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n.Neon-input-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.Neon-input-choose-btn.blue[_ngcontent-%COMP%] {\n  color: #008BFF;\n  border: 1px solid #008BFF;\n}\n.Neon-input-choose-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 14px;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: bold;\n  color: #8d9496;\n  border-radius: 3px;\n  border: 1px solid #c6c6c6;\n  vertical-align: middle;\n  background-color: #fff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlHQUFBO0FBQ1I7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUE7RUFDRSxXQUFBO0FBQ0Y7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdGO0FBREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTUY7QUFKQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQU9GO0FBTEE7RUFDRSxtQkFBQTtBQVFGO0FBTkE7RUFDRSxtQkFBQTtBQVNGO0FBUEE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVVGO0FBUkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFXRjtBQVRBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQVlGO0FBVEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQVlKO0FBVkU7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUFhSjtBQVhFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlC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LFlBQUE7RUE4REo7QUFDRjtBQTVERTtFQUNFO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBOERKOztFQTVERTtJQUNFLGFBQUE7RUErREo7QUFDRjtBQTVERTtFQUNFLDREQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUE4REo7QUExREU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUE2REo7QUF6REU7RUFHRSxzQkFBQTtBQTRESjtBQTFERTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFHQSw4Q0FBQTtBQTZESjtBQTNERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUdBLHlCQUFBO0FBOERKO0FBNURFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUErREo7QUE3REU7RUFDRSxlQUFBO0FBZ0VKO0FBOURFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBaUVKO0FBL0RFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFHQSxvQkFBQTtBQWtFSiIsImZpbGUiOiJob21lLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzA5ZGJhZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyLmFjdGl2ZXtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxze1xyXG4gIGhlaWdodDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlscyBpe1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxzIC5sb2dvX25hbWV7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rc3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGl7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYS5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogIzFhYzdhMTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzExZGJiYTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGl7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhIC5saW5rc19uYW1le1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyAubG9nX291dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaG9tZS1zZWN0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbntcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2IC5zaWRlYmFyLWJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgbmF2IC5zaWRlYmFyLWJ1dHRvbiBpe1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAuc2VhcmNoLWJveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxuICBuYXYgLnNlYXJjaC1ib3ggaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0VGRUVGMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgbmF2IC5zZWFyY2gtYm94IC5ieC1zZWFyY2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwOWU0YjQ7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNCBlYXNlO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAucHJvZmlsZS1kZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0VGRUVGMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1pbi13aWR0aDogMTkwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAycHg7XHJcbiAgfVxyXG4gIG5hdiAucHJvZmlsZS1kZXRhaWxzIGltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIG5hdiAucHJvZmlsZS1kZXRhaWxzIC5hZG1pbl9uYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gLmhvbWUtY29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMDRweDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAub3ZlcnZpZXctYm94ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbiAgfVxyXG4gIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0IC0gMTVweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweCAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIH1cclxuICAub3ZlcnZpZXctYm94ZXMgLmJveC10b3BpY3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAubnVtYmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuaW5kaWNhdG9ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuaW5kaWNhdG9yIGl7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM4RkRBQ0I7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5ib3ggLmluZGljYXRvciBpLmRvd257XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTg3ZDg4O1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmluZGljYXRvciAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NlNWZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzY2YjBmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW46IC0xNXB4IDAgMCA2cHg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC50d297XHJcbiAgICAgY29sb3I6ICMyQkQ0N0Q7XHJcbiAgICAgYmFja2dyb3VuZDogI0MwRjJEODtcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC50aHJlZXtcclxuICAgICBjb2xvcjogI2ZmYzIzMztcclxuICAgICBiYWNrZ3JvdW5kOiAjZmZlOGIzO1xyXG4gICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0LmZvdXJ7XHJcbiAgICAgY29sb3I6ICNlMDUyNjA7XHJcbiAgICAgYmFja2dyb3VuZDogI2Y3ZDRkNztcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLnRvdGFsLW9yZGVye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLyogcGFkZGluZzogMCAyMHB4OyAqL1xyXG4gIH1cclxuICAvKiBsZWZ0IGJveCAqL1xyXG4gIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC5yZWNlbnQtc2FsZXN7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLmJveCAudGl0bGV7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxzIGxpLnRvcGlje1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxzIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlscyBsaSBhe1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDQwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5ib3ggLmJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b24gYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzBBMjU1ODtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b24gYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICAjMGRkNDg4O1xyXG4gIH1cclxuICBcclxuICAvKiBSaWdodCBib3ggKi9cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAudG9wLXNhbGVze1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgMjBweCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGkgYSBpbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGkgLnByb2R1Y3QsXHJcbiAgLnByaWNle1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAvKiBSZXNwb25zaXZlIE1lZGlhIFF1ZXJ5ICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNDBweCkge1xyXG4gICAgLnNpZGViYXJ7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIuYWN0aXZle1xyXG4gICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1zZWN0aW9ue1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9ue1xyXG4gICAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gMjIwcHgpOyAqL1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBsZWZ0OiAyMjBweDtcclxuICAgIH1cclxuICAgIC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyMHB4KTtcclxuICAgICAgbGVmdDogMjIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVze1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLmJveHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC50b3Atc2FsZXN7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLm92ZXJ2aWV3LWJveGVzIC5ib3h7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyIC0gMTVweCk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgbmF2IC5zaWRlYmFyLWJ1dHRvbiAuZGFzaGJvYXJkLFxyXG4gICAgbmF2IC5wcm9maWxlLWRldGFpbHMgLmFkbWluX25hbWUsXHJcbiAgICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpe1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtc2VjdGlvbiBuYXYgLnByb2ZpbGUtZGV0YWlsc3tcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlsc3tcclxuICAgICAgd2lkdGg6IDU2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb24gbmF2IC5wcm9maWxlLWRldGFpbHN7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIDpyb290IHtcclxuICAgIC0tYm9keS1iZzogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjdmYSAwJSwgI2MzY2ZlMiAxMDAlKTtcclxuICAgIC0tbXNnZXItYmc6ICNmZmY7XHJcbiAgICAtLWJvcmRlcjogMjNweCBzb2xpZCAjZGRkO1xyXG4gICAgLS1sZWZ0LW1zZy1iZzogI2VjZWNlYztcclxuICAgIC0tcmlnaHQtbXNnLWJnOiAjMjZmZjc5O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuTmVvbiB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG4gIC5OZW9uICoge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtZHJhZ0Ryb3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzQzcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgY29sb3I6ICM4ZDk0OTk7XHJcbiAgICBjb2xvcjogIzk3QTFBODtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI0M4Q0JDRTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LWRyYWdEcm9wIC5OZW9uLWlucHV0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAuTmVvbi1pbnB1dC10ZXh0IGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtdGV4dCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtY2hvb3NlLWJ0bi5ibHVlIHtcclxuICAgIGNvbG9yOiAjMDA4QkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOEJGRjtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtY2hvb3NlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzhkOTQ5NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class MessageService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super('/messages', http);
    }
    getMessages(doctorId, patientId) {
        const url2 = 'https://testingprojectmedicalement.herokuapp.com/api';
        this.url = url2 + "/messages/get?doctorId=" + doctorId + "&patientId=" + patientId;
        return this.http.get(this.url);
    }
    envoyer(doctorId, patientId, subject, files) {
        this.url = "http://localhost:5000/api/messages/envoyer";
        const formData = new FormData();
        files.forEach(file => {
            console.log(file);
            formData.append('files', file.blob, file.name);
        });
        formData.append('toId', patientId);
        formData.append('fromId', doctorId);
        formData.append('subject', subject);
        return this.http.post(this.url, formData);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "u7Z3":
/*!*******************************************!*\
  !*** ./src/app/pipes/date-format.pipe.ts ***!
  \*******************************************/
/*! exports provided: DateFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function() { return DateFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DateFormatPipe {
    transform(input) {
        return input.slice(0, 10) + ' ' + input.slice(11, 16);
    }
}
DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) { return new (t || DateFormatPipe)(); };
DateFormatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateFormat", type: DateFormatPipe, pure: true });


/***/ }),

/***/ "vH6C":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../guards/auth.guard */ "UTcu");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ "XF2g");
/* harmony import */ var _analytic_analytic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytic/analytic.component */ "ob2r");
/* harmony import */ var _biblio_biblio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./biblio/biblio.component */ "9U2B");
/* harmony import */ var _paients_paients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paients/paients.component */ "sJ+F");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team/team.component */ "DDT9");
/* harmony import */ var _pharmacie_pharmacie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pharmacie/pharmacie.component */ "7jrk");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages/messages.component */ "nfc2");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.component */ "M95H");
/* harmony import */ var _traitement_malade_traitement_malade_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./traitement-malade/traitement-malade.component */ "vUTr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'traitementMalade',
        component: _traitement_malade_traitement_malade_component__WEBPACK_IMPORTED_MODULE_9__["TraitementMaladeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'pharmacie',
        component: _pharmacie_pharmacie_component__WEBPACK_IMPORTED_MODULE_6__["PharmacieComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'team',
        component: _team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'patients',
        component: _paients_paients_component__WEBPACK_IMPORTED_MODULE_4__["PaientsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'biblio',
        component: _biblio_biblio_component__WEBPACK_IMPORTED_MODULE_3__["BiblioComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'analytic',
        component: _analytic_analytic_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] }); })();


/***/ }),

/***/ "vUTr":
/*!************************************************************************************!*\
  !*** ./src/app/modules/dashboard/traitement-malade/traitement-malade.component.ts ***!
  \************************************************************************************/
/*! exports provided: TraitementMaladeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraitementMaladeComponent", function() { return TraitementMaladeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _models_PredParam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../models/PredParam */ "wZ7R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/patient.service */ "7wfR");
/* harmony import */ var _services_predictions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/predictions.service */ "lIeI");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/message.service */ "tZre");
/* harmony import */ var _services_consultation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/consultation.service */ "z2Mo");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "eLR9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pdf_pdf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pdf/pdf.component */ "BI9a");











function TraitementMaladeComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TraitementMaladeComponent_tr_43_Template_input_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const patient_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.checkToggle(patient_r4, $event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.checkeds.includes(patient_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", patient_r4.nom, " ", patient_r4.prenom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", patient_r4.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", patient_r4.adresse, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", patient_r4.phone, "");
} }
function TraitementMaladeComponent_div_44_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "La prediction est : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "L'etat est : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r9.prediction.nom + " " + ctx_r9.prediction.prenom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 4, ctx_r9.prediction.porcentage, "1.1-2"), " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" La type de est : ", ctx_r9.prediction.typeOfCellule, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.prediction.etat ? "Normal" : "Eleve");
} }
function TraitementMaladeComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TraitementMaladeComponent_div_44_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r10.prediction = undefined; return ctx_r10.list_images_selected = []; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TraitementMaladeComponent_div_44_div_8_Template, 18, 7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("col-md-12", ctx_r1.prediction && ctx_r1.prediction.porcentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", image_r7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.prediction && ctx_r1.prediction.porcentage);
} }
function TraitementMaladeComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TraitementMaladeComponent_div_45_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.imageSelected($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Drag&Drop files here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Browse Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TraitementMaladeComponent_app_pdf_55_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-pdf", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("terminateDownload", function TraitementMaladeComponent_app_pdf_55_Template_app_pdf_terminateDownload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.runDownload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("doctorName", ctx_r3.user.nom + " " + ctx_r3.user.prenom)("patientName", ctx_r3.checkeds[0].nom + " " + ctx_r3.checkeds[0].prenom)("etat", ctx_r3.prediction.etat)("maladeName", ctx_r3.nomOfMalade);
} }
class TraitementMaladeComponent {
    constructor(route, patientService, predService, msgService, router, consultationService) {
        this.route = route;
        this.patientService = patientService;
        this.predService = predService;
        this.msgService = msgService;
        this.router = router;
        this.consultationService = consultationService;
        this.patients = [];
        this.checkeds = [];
        this.list_images_selected = [];
        this.loading = false;
        this.download = false;
        this.toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.rapportDownload = reader.result;
                resolve(reader.result);
            };
            reader.onerror = error => reject(error);
        });
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.route.queryParamMap.subscribe((param) => {
            this.malade_id = param.get('malade_id');
            this.getPatientsOfMalade();
        });
    }
    getPatientsOfMalade() {
        this.patientService.getPatientsOfMalade(this.malade_id)
            .subscribe((resp) => {
            this.patients = resp.patients;
            this.nomOfMalade = resp.nomOfMalade;
        });
    }
    checkToggle(patientSelected, checkedTarget) {
        // this.checked = true;
        if (!this.checkeds.includes(patientSelected)) {
            this.checkeds.push(patientSelected);
        }
        else {
            this.checkeds.splice(this.checkeds.indexOf(patientSelected), 1);
        }
        // if (!this.checkeds.length){
        //   this.checked = false;
        // }
    }
    imageSelected(fileSelected) {
        const images = fileSelected.files;
        for (let i = 0; i < images.length; i++) {
            this.Main(images[i]);
        }
    }
    Main(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.list_images_selected.push(yield this.toBase64(file));
        });
    }
    lancerPrediction() {
        this.list_images_selected.map((target, index) => {
            const imgTag = document.createElement('img');
            imgTag.src = target;
            this.predService.predict(new _models_PredParam__WEBPACK_IMPORTED_MODULE_1__["PredParam"](imgTag), this.nomOfMalade.toLowerCase()).then((pred) => {
                this.prediction = pred;
                this.prediction.nom = this.checkeds[0].nom;
                this.prediction.prenom = this.checkeds[0].prenom;
                this.loading = true;
            }, err => {
                this.loading = true;
            });
        });
    }
    downloadRapport() {
        this.download = true;
    }
    creerOrdonnance() {
    }
    dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([ab], { type: mimeString });
        return blob;
    }
    envoyerRapport() {
        const files = [];
        const blob = this.dataURItoBlob(this.rapportDownload);
        files.push({ blob: blob, filename: 'rapport.pdf' });
        this.msgService.envoyer(this.user._id, this.checkeds[0]._id, undefined, files)
            .subscribe((resp) => {
            this.consultationService.addConsultation(files[0], this.prediction.porcentage, this.prediction.etat, this.malade_id, this.checkeds[0]._id)
                .subscribe((resp) => {
                this.router.navigateByUrl('/messages?patientSelected_id=' + this.checkeds[0]._id);
            });
        });
    }
}
TraitementMaladeComponent.ɵfac = function TraitementMaladeComponent_Factory(t) { return new (t || TraitementMaladeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_predictions_service__WEBPACK_IMPORTED_MODULE_5__["PredictionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_consultation_service__WEBPACK_IMPORTED_MODULE_7__["ConsultationService"])); };
TraitementMaladeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TraitementMaladeComponent, selectors: [["app-traitement-malade"]], decls: 56, vars: 11, consts: [[1, "home-section"], [1, "sidebar-button"], [1, "dashboard"], [1, "profile-details"], ["alt", "", 3, "src"], [1, "admin_name"], [1, "bx", "bx-chevron-down"], [1, "text-center"], [1, "container"], [1, "table-wrapper"], [1, "table-title"], [1, "row"], [1, "col-sm-6"], [1, "table", "table-striped", "table-hover"], [1, "custom-checkbox"], [4, "ngFor", "ngForOf"], ["class", "Neon Neon-theme-dragdropbox  d-flex justify-content-center", 4, "ngFor", "ngForOf"], ["class", "Neon Neon-theme-dragdropbox", 4, "ngIf"], [1, "w-100", "text-center", "bg-white", "p-3"], ["type", "button", 1, "btn", "btn-outline-success", "btn-lg", "py-3", "m-3", "px-4", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-lg", "py-3", "m-3", "px-4", 3, "disabled", "click"], ["hidden", "", "style", "opacity: 0; position: absolute;", 3, "doctorName", "patientName", "etat", "maladeName", "terminateDownload", 4, "ngIf"], ["type", "checkbox", "id", "checkbox1", "name", "options[]", "value", "1", 3, "checked", "click"], ["for", "checkbox1"], [1, "Neon", "Neon-theme-dragdropbox", "d-flex", "justify-content-center"], [1, "card", "mb-3", 2, "max-width", "780px", "position", "relative"], [1, "text-danger", "cursor-pointer", 2, "position", "absolute", "right", "0", "font-size", "20px", "height", "20px", "width", "20px", 3, "click"], [1, "far", "fa-window-close", "position-absolute", "p-0", "m-0", "bg-white", 2, "top", "0"], [1, "row", "g-0"], [1, "col-md-5"], ["width", "250", 3, "src"], [1, "col-md-7"], ["class", "card-body p-2", 4, "ngIf"], [1, "card-body", "p-2"], [1, "card-title"], [1, "card-text", "p-0", "mb-0", "pb-0", 2, "font-size", "20px"], [1, "text-danger"], [1, "card-text", "pb-0", "mb-0"], [1, "card-text", "mb-0", "pb-0"], [1, "Neon", "Neon-theme-dragdropbox"], ["multiple", "", "name", "files[]", "id", "filer_input2", "type", "file", 1, "file", 3, "change"], [1, "Neon-input-dragDrop", 2, "max-width", "540px"], [1, "Neon-input-inner"], [1, "Neon-input-icon"], [1, "far", "fa-file-image"], [1, "Neon-input-text"], [2, "display", "inline-block", "margin", "15px 0"], [1, "Neon-input-choose-btn", "blue"], ["hidden", "", 2, "opacity", "0", "position", "absolute", 3, "doctorName", "patientName", "etat", "maladeName", "terminateDownload"]], template: function TraitementMaladeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Traitement");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "les patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, TraitementMaladeComponent_tr_43_Template, 13, 6, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, TraitementMaladeComponent_div_44_Template, 9, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, TraitementMaladeComponent_div_45_Template, 13, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TraitementMaladeComponent_Template_button_click_47_listener() { return ctx.lancerPrediction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Lancer Prediction");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TraitementMaladeComponent_Template_button_click_49_listener() { return ctx.downloadRapport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Download Rapport");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TraitementMaladeComponent_Template_button_click_51_listener() { return ctx.creerOrdonnance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Creer Ordonnance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TraitementMaladeComponent_Template_button_click_53_listener() { return ctx.envoyerRapport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Envoyer le Rapport");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, TraitementMaladeComponent_app_pdf_55_Template, 1, 4, "app-pdf", 21);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.user.photos[0].data, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Dr ", ctx.user.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("le traitement sur Cancer de ", ctx.nomOfMalade, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.patients);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.list_images_selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.list_images_selected.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(ctx.list_images_selected.length && ctx.checkeds.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(ctx.prediction && ctx.checkeds.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(ctx.prediction && ctx.checkeds.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.rapportDownload);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.download);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _pdf_pdf_component__WEBPACK_IMPORTED_MODULE_10__["PdfComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 240px;\n  background: #09dbae;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  color: #fff;\n  min-width: 60px;\n  text-align: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  height: 50px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: all 0.4s ease;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #1ac7a1;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #11dbba;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: 60px;\n  text-align: center;\n  font-size: 18px;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   .log_out[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f5f5f5;\n  min-height: 100vh;\n  width: calc(100% - 240px);\n  left: 240px;\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n  left: 60px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  width: calc(100% - 240px);\n  left: 240px;\n  z-index: 100;\n  padding: 0 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  transition: all 0.5s ease;\n}\n.sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  left: 60px;\n  width: calc(100% - 60px);\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n  margin-right: 10px;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  max-width: 550px;\n  width: 100%;\n  margin: 0 20px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  font-size: 18px;\n  padding: 0 15px;\n}\nnav[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background: #09e4b4;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 4px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  font-size: 22px;\n  transition: all 0.4 ease;\n}\n.home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F5F6FA;\n  border: 2px solid #EFEEF1;\n  border-radius: 6px;\n  height: 50px;\n  min-width: 190px;\n  padding: 0 15px 0 2px;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 6px;\n  object-fit: cover;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  margin: 0 10px;\n  white-space: nowrap;\n}\nnav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #333;\n}\n.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 104px;\n}\n.home-content[_ngcontent-%COMP%]   .overview-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  margin-bottom: 26px;\n}\n.overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: calc(100% / 4 - 15px);\n  background: #fff;\n  padding: 15px 14px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.overview-boxes[_ngcontent-%COMP%]   .box-topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 35px;\n  margin-top: -6px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background: #8FDACB;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 20px;\n  margin-right: 5px;\n}\n.box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   i.down[_ngcontent-%COMP%] {\n  background: #e87d88;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  height: 50px;\n  width: 50px;\n  background: #cce5ff;\n  line-height: 50px;\n  text-align: center;\n  color: #66b0ff;\n  border-radius: 12px;\n  margin: -15px 0 0 6px;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.two[_ngcontent-%COMP%] {\n  color: #2BD47D;\n  background: #C0F2D8;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.three[_ngcontent-%COMP%] {\n  color: #ffc233;\n  background: #ffe8b3;\n}\n.home-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .cart.four[_ngcontent-%COMP%] {\n  color: #e05260;\n  background: #f7d4d7;\n}\n.home-content[_ngcontent-%COMP%]   .total-order[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  \n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .recent-sales[_ngcontent-%COMP%] {\n  width: 65%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  \n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li.topic[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n  font-size: 400;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #0A2558;\n  padding: 4px 12px;\n  font-size: 15px;\n  font-weight: 400;\n  border-radius: 4px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0dd488;\n}\n\n.home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n  width: 35%;\n  background: #fff;\n  padding: 20px 30px;\n  margin: 0 20px 0 0;\n  border-radius: 12px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin-right: 10px;\n  background: #333;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%], .price[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n  color: #333;\n}\n\n@media (max-width: 1240px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%] {\n    \n    overflow: hidden;\n    left: 220px;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    left: 60px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    width: calc(100% - 220px);\n    left: 220px;\n  }\n}\n@media (max-width: 1150px) {\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: scroll;\n    margin-bottom: 30px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .top-sales[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 1000px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: calc(100% / 2 - 15px);\n    margin-bottom: 15px;\n  }\n}\n@media (max-width: 700px) {\n  nav[_ngcontent-%COMP%]   .sidebar-button[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .admin_name[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    height: 50px;\n    min-width: 40px;\n  }\n\n  .home-content[_ngcontent-%COMP%]   .sales-boxes[_ngcontent-%COMP%]   .sales-details[_ngcontent-%COMP%] {\n    width: 560px;\n  }\n}\n@media (max-width: 550px) {\n  .overview-boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .sidebar.active[_ngcontent-%COMP%]    ~ .home-section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  --msger-bg: #fff;\n  --border: 23px solid #ddd;\n  --left-msg-bg: #ececec;\n  --right-msg-bg: #26ff79;\n}\n.Neon[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 14px;\n  color: #494949;\n  position: relative;\n}\n.Neon[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%] {\n  display: block;\n  width: 343px;\n  margin: 0 auto 25px auto;\n  padding: 25px;\n  color: #8d9499;\n  color: #97A1A8;\n  background: #fff;\n  border: 2px dashed #C8CBCE;\n  text-align: center;\n  transition: box-shadow 0.3s, border-color 0.3s;\n}\n.Neon-input-dragDrop[_ngcontent-%COMP%]   .Neon-input-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-top: -10px;\n  transition: all 0.3s ease;\n}\n.Neon-input-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n.Neon-input-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.Neon-input-choose-btn.blue[_ngcontent-%COMP%] {\n  color: #008BFF;\n  border: 1px solid #008BFF;\n}\n.Neon-input-choose-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 14px;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: bold;\n  color: #8d9496;\n  border-radius: 3px;\n  border: 1px solid #c6c6c6;\n  vertical-align: middle;\n  background-color: #fff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px 25px;\n  margin: 30px 0;\n  border-radius: 1px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  color: #fff;\n  padding: 16px 30px;\n  margin: -20px -25px 10px;\n  border-radius: 1px 1px 0 0;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 24px;\n}\n.table-title[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  float: right;\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #fff;\n  float: right;\n  font-size: 13px;\n  border: none;\n  min-width: 50px;\n  border-radius: 1px;\n  border: none;\n  outline: none !important;\n  margin-left: 10px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 21px;\n  margin-right: 5px;\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 2px;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-color: #e9e9e9;\n  padding: 12px 15px;\n  vertical-align: middle;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 60px;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 100px;\n}\ntable.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background-color: #fcfcfc;\n}\ntable.table-striped.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0 5px;\n  cursor: pointer;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   i[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  font-size: 22px;\n  margin: 0 5px;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #566787;\n  display: inline-block;\n  text-decoration: none;\n  outline: none !important;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2196F3;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.edit[_ngcontent-%COMP%] {\n  color: #FFC107;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.delete[_ngcontent-%COMP%] {\n  color: #F44336;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\ntable.table[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.pagination[_ngcontent-%COMP%] {\n  float: right;\n  margin: 0 0 5px;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 13px;\n  min-width: 30px;\n  min-height: 30px;\n  color: #999;\n  margin: 0 2px;\n  line-height: 30px;\n  border-radius: 1px !important;\n  text-align: center;\n  padding: 0 6px;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a.page-link[_ngcontent-%COMP%] {\n  background: #03A9F4;\n}\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0397d6;\n}\n.pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-top: 6px;\n}\n.hint-text[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.custom-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  margin: 5px 0 0 3px;\n  z-index: 9;\n}\n.custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  width: 18px;\n  height: 18px;\n}\n.custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  content: \"\";\n  margin-right: 10px;\n  display: inline-block;\n  vertical-align: text-top;\n  background: white;\n  border: 1px solid #bbb;\n  border-radius: 1px;\n  box-sizing: border-box;\n  z-index: 2;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 6px;\n  top: 3px;\n  width: 6px;\n  height: 11px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: inherit;\n  z-index: 3;\n  transform: rotateZ(45deg);\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  border-color: #03A9F4;\n  background: #03A9F4;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  border-color: #fff;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%]:before {\n  color: #b8b8b8;\n  cursor: auto;\n  box-shadow: none;\n  background: #ddd;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 1px;\n}\n.modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  background: #ecf0f1;\n  border-radius: 0 0 1px 1px;\n}\n.modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.modal[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  box-shadow: none;\n  border-color: #dddddd;\n}\n.modal[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.modal[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  min-width: 100px;\n}\n.modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px 25px;\n  margin: 30px 0;\n  border-radius: 1px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  color: #fff;\n  padding: 16px 30px;\n  margin: -20px -25px 10px;\n  border-radius: 1px 1px 0 0;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 24px;\n}\n.table-title[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  float: right;\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #fff;\n  float: right;\n  font-size: 13px;\n  border: none;\n  min-width: 50px;\n  border-radius: 1px;\n  border: none;\n  outline: none !important;\n  margin-left: 10px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.247);\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 21px;\n  margin-right: 5px;\n}\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 2px;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-color: #e9e9e9;\n  padding: 12px 15px;\n  vertical-align: middle;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 60px;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 100px;\n}\ntable.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background-color: #fcfcfc;\n}\ntable.table-striped.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0 5px;\n  cursor: pointer;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   i[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  font-size: 22px;\n  margin: 0 5px;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #566787;\n  display: inline-block;\n  text-decoration: none !important;\n  outline: none !important;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2196F3;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.edit[_ngcontent-%COMP%] {\n  color: #FFC107;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.delete[_ngcontent-%COMP%] {\n  color: #F44336;\n}\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\ntable.table[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.pagination[_ngcontent-%COMP%] {\n  float: right;\n  margin: 0 0 5px;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 13px;\n  min-width: 30px;\n  min-height: 30px;\n  color: #999;\n  margin: 0 2px;\n  line-height: 30px;\n  border-radius: 1px !important;\n  text-align: center;\n  padding: 0 6px;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a.page-link[_ngcontent-%COMP%] {\n  background: #03A9F4;\n}\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0397d6;\n}\n.pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-top: 6px;\n}\n.hint-text[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.custom-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  margin: 5px 0 0 3px;\n  z-index: 9;\n}\n.custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  width: 18px;\n  height: 18px;\n}\n.custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  content: \"\";\n  margin-right: 10px;\n  display: inline-block;\n  vertical-align: text-top;\n  background: white;\n  border: 1px solid #bbb;\n  border-radius: 1px;\n  box-sizing: border-box;\n  z-index: 2;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 6px;\n  top: 3px;\n  width: 6px;\n  height: 11px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: inherit;\n  z-index: 3;\n  transform: rotateZ(45deg);\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  border-color: #03A9F4;\n  background: #03A9F4;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  border-color: #fff;\n}\n.custom-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%]:before {\n  color: #b8b8b8;\n  cursor: auto;\n  box-shadow: none;\n  background: #ddd;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 1px;\n}\n.modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  background: #ecf0f1;\n  border-radius: 0 0 1px 1px;\n}\n.modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.modal[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  box-shadow: none;\n  border-color: #dddddd;\n}\n.modal[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.modal[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  min-width: 100px;\n}\n.modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.button[_ngcontent-%COMP%] {\n  border: none;\n  color: white;\n  padding: 16px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 20px;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\ninput.file[_ngcontent-%COMP%] {\n  z-index: 999;\n  opacity: 0;\n  width: 320px;\n  height: 200px;\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.no-drop[_ngcontent-%COMP%] {\n  cursor: no-drop !important;\n}\n.button1[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #4CAF50;\n}\n.button1[_ngcontent-%COMP%]:hover {\n  background-color: #4CAF50;\n  color: white;\n}\n.button2[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid #008CBA;\n}\n.button2[_ngcontent-%COMP%]:hover {\n  background-color: #008CBA;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdHJhaXRlbWVudC1tYWxhZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUdBQUE7QUFDUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFQTtFQUNFLFdBQUE7QUFDRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQUZBO0VBQ0UsZ0JBQUE7QUFLRjtBQUhBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFNRjtBQUpBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBT0Y7QUFMQTtFQUNFLG1CQUFBO0FBUUY7QUFOQTtFQUNFLG1CQUFBO0FBU0Y7QUFQQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBVUY7QUFSQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVdGO0FBVEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBWUY7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBWUo7QUFWRTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtBQWFKO0FBWEU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VB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O0FBekpFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQWMsYUFBQTtFQUNkLGtCQUFBO0VBQ0EsVUFBQTtFQUFZLFNBQUE7RUFDWixrQkFBQTtFQUFvQixpQkFBQTtBQStKeEI7QUE3SkU7RUFDRSwwQkFBQTtBQWdLSjtBQTlKRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBaUtKO0FBOUpFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBaUtKO0FBOUpFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFpS0o7QUE5SkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFpS0oiLCJmaWxlIjoidHJhaXRlbWVudC1tYWxhZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzA5ZGJhZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyLmFjdGl2ZXtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxze1xyXG4gIGhlaWdodDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNpZGViYXIgLmxvZ28tZGV0YWlscyBpe1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxzIC5sb2dvX25hbWV7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rc3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGl7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYtbGlua3MgbGkgYS5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogIzFhYzdhMTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzExZGJiYTtcclxufVxyXG4uc2lkZWJhciAubmF2LWxpbmtzIGxpIGl7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyBsaSBhIC5saW5rc19uYW1le1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saW5rcyAubG9nX291dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaG9tZS1zZWN0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLnNpZGViYXIuYWN0aXZlIH4gLmhvbWUtc2VjdGlvbntcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gbmF2IC5zaWRlYmFyLWJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgbmF2IC5zaWRlYmFyLWJ1dHRvbiBpe1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAuc2VhcmNoLWJveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxuICBuYXYgLnNlYXJjaC1ib3ggaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0VGRUVGMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgbmF2IC5zZWFyY2gtYm94IC5ieC1zZWFyY2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwOWU0YjQ7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNCBlYXNlO1xyXG4gIH1cclxuICAuaG9tZS1zZWN0aW9uIG5hdiAucHJvZmlsZS1kZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNkZBO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0VGRUVGMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1pbi13aWR0aDogMTkwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAycHg7XHJcbiAgfVxyXG4gIG5hdiAucHJvZmlsZS1kZXRhaWxzIGltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIG5hdiAucHJvZmlsZS1kZXRhaWxzIC5hZG1pbl9uYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIC5ob21lLXNlY3Rpb24gLmhvbWUtY29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMDRweDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAub3ZlcnZpZXctYm94ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbiAgfVxyXG4gIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0IC0gMTVweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweCAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIH1cclxuICAub3ZlcnZpZXctYm94ZXMgLmJveC10b3BpY3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAubnVtYmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuaW5kaWNhdG9ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuaW5kaWNhdG9yIGl7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM4RkRBQ0I7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5ib3ggLmluZGljYXRvciBpLmRvd257XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTg3ZDg4O1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5ib3ggLmluZGljYXRvciAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NlNWZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzY2YjBmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW46IC0xNXB4IDAgMCA2cHg7XHJcbiAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC50d297XHJcbiAgICAgY29sb3I6ICMyQkQ0N0Q7XHJcbiAgICAgYmFja2dyb3VuZDogI0MwRjJEODtcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLmJveCAuY2FydC50aHJlZXtcclxuICAgICBjb2xvcjogI2ZmYzIzMztcclxuICAgICBiYWNrZ3JvdW5kOiAjZmZlOGIzO1xyXG4gICB9XHJcbiAgLmhvbWUtY29udGVudCAuYm94IC5jYXJ0LmZvdXJ7XHJcbiAgICAgY29sb3I6ICNlMDUyNjA7XHJcbiAgICAgYmFja2dyb3VuZDogI2Y3ZDRkNztcclxuICAgfVxyXG4gIC5ob21lLWNvbnRlbnQgLnRvdGFsLW9yZGVye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLyogcGFkZGluZzogMCAyMHB4OyAqL1xyXG4gIH1cclxuICAvKiBsZWZ0IGJveCAqL1xyXG4gIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC5yZWNlbnQtc2FsZXN7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuc2FsZXMtYm94ZXMgLmJveCAudGl0bGV7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxzIGxpLnRvcGlje1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5zYWxlcy1kZXRhaWxzIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlscyBsaSBhe1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDQwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC5ib3ggLmJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b24gYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzBBMjU1ODtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAuYm94IC5idXR0b24gYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICAjMGRkNDg4O1xyXG4gIH1cclxuICBcclxuICAvKiBSaWdodCBib3ggKi9cclxuICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAudG9wLXNhbGVze1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgMjBweCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGkgYSBpbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgfVxyXG4gIC5zYWxlcy1ib3hlcyAudG9wLXNhbGVzIGxpIGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnNhbGVzLWJveGVzIC50b3Atc2FsZXMgbGkgLnByb2R1Y3QsXHJcbiAgLnByaWNle1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAvKiBSZXNwb25zaXZlIE1lZGlhIFF1ZXJ5ICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNDBweCkge1xyXG4gICAgLnNpZGViYXJ7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIuYWN0aXZle1xyXG4gICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1zZWN0aW9ue1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9ue1xyXG4gICAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gMjIwcHgpOyAqL1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBsZWZ0OiAyMjBweDtcclxuICAgIH1cclxuICAgIC5ob21lLXNlY3Rpb24gbmF2e1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci5hY3RpdmUgfiAuaG9tZS1zZWN0aW9uIG5hdntcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyMHB4KTtcclxuICAgICAgbGVmdDogMjIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVze1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtY29udGVudCAuc2FsZXMtYm94ZXMgLmJveHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5ob21lLWNvbnRlbnQgLnNhbGVzLWJveGVzIC50b3Atc2FsZXN7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLm92ZXJ2aWV3LWJveGVzIC5ib3h7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyIC0gMTVweCk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgbmF2IC5zaWRlYmFyLWJ1dHRvbiAuZGFzaGJvYXJkLFxyXG4gICAgbmF2IC5wcm9maWxlLWRldGFpbHMgLmFkbWluX25hbWUsXHJcbiAgICBuYXYgLnByb2ZpbGUtZGV0YWlscyBpe1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtc2VjdGlvbiBuYXYgLnByb2ZpbGUtZGV0YWlsc3tcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1jb250ZW50IC5zYWxlcy1ib3hlcyAuc2FsZXMtZGV0YWlsc3tcclxuICAgICAgd2lkdGg6IDU2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5vdmVydmlldy1ib3hlcyAuYm94e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyLmFjdGl2ZSB+IC5ob21lLXNlY3Rpb24gbmF2IC5wcm9maWxlLWRldGFpbHN7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIDpyb290IHtcclxuICAgIC0tYm9keS1iZzogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjdmYSAwJSwgI2MzY2ZlMiAxMDAlKTtcclxuICAgIC0tbXNnZXItYmc6ICNmZmY7XHJcbiAgICAtLWJvcmRlcjogMjNweCBzb2xpZCAjZGRkO1xyXG4gICAgLS1sZWZ0LW1zZy1iZzogI2VjZWNlYztcclxuICAgIC0tcmlnaHQtbXNnLWJnOiAjMjZmZjc5O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuTmVvbiB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG4gIC5OZW9uICoge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtZHJhZ0Ryb3Age1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzQzcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgY29sb3I6ICM4ZDk0OTk7XHJcbiAgICBjb2xvcjogIzk3QTFBODtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI0M4Q0JDRTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbiAgfVxyXG4gIC5OZW9uLWlucHV0LWRyYWdEcm9wIC5OZW9uLWlucHV0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAuTmVvbi1pbnB1dC10ZXh0IGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtdGV4dCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtY2hvb3NlLWJ0bi5ibHVlIHtcclxuICAgIGNvbG9yOiAjMDA4QkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOEJGRjtcclxuICB9XHJcbiAgLk5lb24taW5wdXQtY2hvb3NlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzhkOTQ5NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIH1cclxuXHJcbiAudGFibGUtd3JhcHBlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czoxcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNDcpO1xyXG4gICAgfVxyXG4gLnRhYmxlLXRpdGxlIHsgICAgICAgIFxyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxNnB4IDMwcHg7XHJcbiAgbWFyZ2luOiAtMjBweCAtMjVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweCAxcHggMCAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQ3KTtcclxuICAgIH1cclxuICAgIC50YWJsZS10aXRsZSBoMiB7XHJcbiAgbWFyZ2luOiA1cHggMCAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuIH1cclxuIC50YWJsZS10aXRsZSAuYnRuLWdyb3VwIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiB9XHJcbiAudGFibGUtdGl0bGUgLmJ0biB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjQ3KTtcclxuIH1cclxuIC50YWJsZS10aXRsZSAuYnRuIGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuIH1cclxuIC50YWJsZS10aXRsZSAuYnRuIHNwYW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuIH1cclxuICAgIHRhYmxlLnRhYmxlIHRyIHRoLCB0YWJsZS50YWJsZSB0ciB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTllOWU5O1xyXG4gIHBhZGRpbmc6IDEycHggMTVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gdGFibGUudGFibGUgdHIgdGg6Zmlyc3QtY2hpbGQge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gfVxyXG4gdGFibGUudGFibGUgdHIgdGg6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gfVxyXG4gICAgdGFibGUudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG4gfVxyXG4gdGFibGUudGFibGUtc3RyaXBlZC50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuIH1cclxuICAgIHRhYmxlLnRhYmxlIHRoIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH0gXHJcbiAgICB0YWJsZS50YWJsZSB0ZDpsYXN0LWNoaWxkIGkge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxuIHRhYmxlLnRhYmxlIHRkIGEge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNTY2Nzg3O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gdGFibGUudGFibGUgdGQgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMyMTk2RjM7XHJcbiB9XHJcbiB0YWJsZS50YWJsZSB0ZCBhLmVkaXQge1xyXG4gICAgICAgIGNvbG9yOiAjRkZDMTA3O1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdGQgYS5kZWxldGUge1xyXG4gICAgICAgIGNvbG9yOiAjRjQ0MzM2O1xyXG4gICAgfVxyXG4gICAgdGFibGUudGFibGUgdGQgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgfVxyXG4gdGFibGUudGFibGUgLmF2YXRhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gfVxyXG4gICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgICB9XHJcbiAgICAucGFnaW5hdGlvbiBsaSBhIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgfVxyXG4gICAgLnBhZ2luYXRpb24gbGkgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICB9IFxyXG4gICAgLnBhZ2luYXRpb24gbGkuYWN0aXZlIGEsIC5wYWdpbmF0aW9uIGxpLmFjdGl2ZSBhLnBhZ2UtbGluayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAzQTlGNDtcclxuICAgIH1cclxuICAgIC5wYWdpbmF0aW9uIGxpLmFjdGl2ZSBhOmhvdmVyIHsgICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMzk3ZDY7XHJcbiAgICB9XHJcbiAucGFnaW5hdGlvbiBsaS5kaXNhYmxlZCBpIHtcclxuICAgICAgICBjb2xvcjogI2NjYztcclxuICAgIH1cclxuICAgIC5wYWdpbmF0aW9uIGxpIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4XHJcbiAgICB9XHJcbiAgICAuaGludC10ZXh0IHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH0gICAgXHJcbiAvKiBDdXN0b20gY2hlY2tib3ggKi9cclxuIC5jdXN0b20tY2hlY2tib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIH1cclxuIC5jdXN0b20tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHsgICAgXHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiA1cHggMCAwIDNweDtcclxuICB6LWluZGV4OiA5O1xyXG4gfVxyXG4gLmN1c3RvbS1jaGVja2JveCBsYWJlbDpiZWZvcmV7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gfVxyXG4gLmN1c3RvbS1jaGVja2JveCBsYWJlbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgei1pbmRleDogMjtcclxuIH1cclxuIC5jdXN0b20tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDZweDtcclxuICB0b3A6IDNweDtcclxuICB3aWR0aDogNnB4O1xyXG4gIGhlaWdodDogMTFweDtcclxuICBib3JkZXI6IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICB0cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgei1pbmRleDogMztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gfVxyXG4gLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDNBOUY0O1xyXG4gIGJhY2tncm91bmQ6ICMwM0E5RjQ7XHJcbiB9XHJcbiAuY3VzdG9tLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuIH1cclxuIC5jdXN0b20tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkICsgbGFiZWw6YmVmb3JlIHtcclxuICBjb2xvcjogI2I4YjhiODtcclxuICBjdXJzb3I6IGF1dG87XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gfVxyXG4gLyogTW9kYWwgc3R5bGVzICovXHJcbiAubW9kYWwgLm1vZGFsLWRpYWxvZyB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuIH1cclxuIC5tb2RhbCAubW9kYWwtaGVhZGVyLCAubW9kYWwgLm1vZGFsLWJvZHksIC5tb2RhbCAubW9kYWwtZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiB9XHJcbiAubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuIH1cclxuIC5tb2RhbCAubW9kYWwtZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxcHggMXB4O1xyXG4gfVxyXG4gICAgLm1vZGFsIC5tb2RhbC10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gLm1vZGFsIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcclxuIH1cclxuIC5tb2RhbCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbiB9XHJcbiAubW9kYWwgLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiB9IFxyXG4gLm1vZGFsIGZvcm0gbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiB9IFxyXG5cclxuIC50YWJsZS13cmFwcGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjVweDtcclxuICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICBib3JkZXItcmFkaXVzOjFweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI0Nyk7XHJcbiAgICB9XHJcbiAudGFibGUtdGl0bGUgeyAgICAgICAgXHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE2cHggMzBweDtcclxuICBtYXJnaW46IC0yMHB4IC0yNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4IDFweCAwIDA7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNDcpO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXRpdGxlIGgyIHtcclxuICBtYXJnaW46IDVweCAwIDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gfVxyXG4gLnRhYmxlLXRpdGxlIC5idG4tZ3JvdXAge1xyXG4gIGZsb2F0OiByaWdodDtcclxuIH1cclxuIC50YWJsZS10aXRsZSAuYnRuIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNDcpO1xyXG4gfVxyXG4gLnRhYmxlLXRpdGxlIC5idG4gaSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gfVxyXG4gLnRhYmxlLXRpdGxlIC5idG4gc3BhbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gfVxyXG4gICAgdGFibGUudGFibGUgdHIgdGgsIHRhYmxlLnRhYmxlIHRyIHRkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNlOWU5ZTk7XHJcbiAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiB0YWJsZS50YWJsZSB0ciB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiB9XHJcbiB0YWJsZS50YWJsZSB0ciB0aDpsYXN0LWNoaWxkIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiB9XHJcbiAgICB0YWJsZS50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbiB9XHJcbiB0YWJsZS50YWJsZS1zdHJpcGVkLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gfVxyXG4gICAgdGFibGUudGFibGUgdGggaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfSBcclxuICAgIHRhYmxlLnRhYmxlIHRkOmxhc3QtY2hpbGQgaSB7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgfVxyXG4gdGFibGUudGFibGUgdGQgYSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM1NjY3ODc7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuIH1cclxuIHRhYmxlLnRhYmxlIHRkIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMjE5NkYzO1xyXG4gfVxyXG4gdGFibGUudGFibGUgdGQgYS5lZGl0IHtcclxuICAgICAgICBjb2xvcjogI0ZGQzEwNztcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRkIGEuZGVsZXRlIHtcclxuICAgICAgICBjb2xvcjogI0Y0NDMzNjtcclxuICAgIH1cclxuICAgIHRhYmxlLnRhYmxlIHRkIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIH1cclxuIHRhYmxlLnRhYmxlIC5hdmF0YXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuIH1cclxuICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgfVxyXG4gICAgLnBhZ2luYXRpb24gbGkgYSB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIH1cclxuICAgIC5wYWdpbmF0aW9uIGxpIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgfSBcclxuICAgIC5wYWdpbmF0aW9uIGxpLmFjdGl2ZSBhLCAucGFnaW5hdGlvbiBsaS5hY3RpdmUgYS5wYWdlLWxpbmsge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwM0E5RjQ7XHJcbiAgICB9XHJcbiAgICAucGFnaW5hdGlvbiBsaS5hY3RpdmUgYTpob3ZlciB7ICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5N2Q2O1xyXG4gICAgfVxyXG4gLnBhZ2luYXRpb24gbGkuZGlzYWJsZWQgaSB7XHJcbiAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICB9XHJcbiAgICAucGFnaW5hdGlvbiBsaSBpIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweFxyXG4gICAgfVxyXG4gICAgLmhpbnQtdGV4dCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9ICAgIFxyXG4gLyogQ3VzdG9tIGNoZWNrYm94ICovXHJcbiAuY3VzdG9tLWNoZWNrYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiB9XHJcbiAuY3VzdG9tLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7ICAgIFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogNXB4IDAgMCAzcHg7XHJcbiAgei1pbmRleDogOTtcclxuIH1cclxuIC5jdXN0b20tY2hlY2tib3ggbGFiZWw6YmVmb3Jle1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuIH1cclxuIC5jdXN0b20tY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHotaW5kZXg6IDI7XHJcbiB9XHJcbiAuY3VzdG9tLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA2cHg7XHJcbiAgdG9wOiAzcHg7XHJcbiAgd2lkdGg6IDZweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxuIH1cclxuIC5jdXN0b20tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIGJvcmRlci1jb2xvcjogIzAzQTlGNDtcclxuICBiYWNrZ3JvdW5kOiAjMDNBOUY0O1xyXG4gfVxyXG4gLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiB9XHJcbiAuY3VzdG9tLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgY29sb3I6ICNiOGI4Yjg7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuIH1cclxuIC8qIE1vZGFsIHN0eWxlcyAqL1xyXG4gLm1vZGFsIC5tb2RhbC1kaWFsb2cge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiB9XHJcbiAubW9kYWwgLm1vZGFsLWhlYWRlciwgLm1vZGFsIC5tb2RhbC1ib2R5LCAubW9kYWwgLm1vZGFsLWZvb3RlciB7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gfVxyXG4gLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiB9XHJcbiAubW9kYWwgLm1vZGFsLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogI2VjZjBmMTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMXB4IDFweDtcclxuIH1cclxuICAgIC5tb2RhbCAubW9kYWwtdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuIC5tb2RhbCAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XHJcbiB9XHJcbiAubW9kYWwgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG4gfVxyXG4gLm1vZGFsIC5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gfSBcclxuIC5tb2RhbCBmb3JtIGxhYmVsIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gfSBcclxuIC5idXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgaW5wdXQuZmlsZXtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMzIwcHg7IGhlaWdodDogMjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4OyBsZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuICAubm8tZHJvcCB7XHJcbiAgICBjdXJzb3I6IG5vLWRyb3AgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ1dHRvbjEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24xOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxuICAgIGNvbG9yOiBibGFjazsgXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4Q0JBO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uMjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Q0JBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _guards_guest_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/guest.guard */ "zLLb");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "M95H");
/* harmony import */ var _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/auth/login/login.component */ "6n5F");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_guards_guest_guard__WEBPACK_IMPORTED_MODULE_1__["GuestGuard"]]
    },
    {
        path: 'login',
        component: _modules_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_guards_guest_guard__WEBPACK_IMPORTED_MODULE_1__["GuestGuard"]]
    },
    {
        path: 'dash',
        component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();


/***/ }),

/***/ "wZ7R":
/*!*********************************!*\
  !*** ./src/models/PredParam.ts ***!
  \*********************************/
/*! exports provided: PredParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredParam", function() { return PredParam; });
class PredParam {
    constructor(tagImage) {
        this.prefix = "./../../assets/predictions/";
        this.sufix = "/tfjs_model/model.json";
        this.models = [
            {
                type: 'skin',
                path: this.prefix + 'skin' + this.sufix,
                sizeTargetImage: {
                    width: 32,
                    height: 32
                }
            },
            {
                type: 'tumor',
                path: this.prefix + 'tumor' + this.sufix,
                sizeTargetImage: {
                    width: 224,
                    height: 224
                }
            },
            {
                type: 'malaria',
                path: this.prefix + 'malaria' + this.sufix,
                sizeTargetImage: {
                    width: 32,
                    height: 32
                }
            },
            {
                type: 'Breast',
                path: this.prefix + 'Breast' + this.sufix,
                sizeTargetImage: {
                    width: 28,
                    height: 28
                }
            },
        ];
        this.tagImage = tagImage;
    }
}


/***/ }),

/***/ "xaqL":
/*!************************************************!*\
  !*** ./src/app/services/infermerie.service.ts ***!
  \************************************************/
/*! exports provided: InfermerieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfermerieService", function() { return InfermerieService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class InfermerieService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super('/infermeris', http);
    }
    deleteInfermerie(_id, user_id) {
        return this.http.post(this.url + '/deleteInfermerie', { _id: _id, user_id: user_id });
    }
    modifyInfermerie(infermerie) {
        return this.http.post(this.url + '/modifyInfermerie', infermerie);
    }
    addInfermerie(infermerie, user_id) {
        return this.http.post(this.url + '/addInfermerie', Object.assign(Object.assign({}, infermerie), { user_id: user_id }));
    }
}
InfermerieService.ɵfac = function InfermerieService_Factory(t) { return new (t || InfermerieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
InfermerieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InfermerieService, factory: InfermerieService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "z2Mo":
/*!**************************************************!*\
  !*** ./src/app/services/consultation.service.ts ***!
  \**************************************************/
/*! exports provided: ConsultationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationService", function() { return ConsultationService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class ConsultationService extends _data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"] {
    constructor(http) {
        super('/consultations', http);
    }
    addConsultation(rapport, prediction, etat, malade, patient) {
        const formData = new FormData();
        formData.append('rapport', rapport.blob, rapport.filename);
        formData.append('prediction', prediction);
        formData.append('etat', etat);
        formData.append('malade', malade);
        formData.append('patient', patient);
        return this.http.post(this.url + '/addConsultation', formData);
    }
}
ConsultationService.ɵfac = function ConsultationService_Factory(t) { return new (t || ConsultationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ConsultationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConsultationService, factory: ConsultationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zLLb":
/*!***************************************!*\
  !*** ./src/app/guards/guest.guard.ts ***!
  \***************************************/
/*! exports provided: GuestGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestGuard", function() { return GuestGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class GuestGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('token')) {
            this.router.navigateByUrl('/dash');
            return false;
        }
        return true;
    }
}
GuestGuard.ɵfac = function GuestGuard_Factory(t) { return new (t || GuestGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GuestGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GuestGuard, factory: GuestGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map