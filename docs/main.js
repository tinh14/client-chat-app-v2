(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Downloads\client-chat-app-v2\src\main.ts */"zUnb");


/***/ }),

/***/ "1cIR":
/*!****************************************************!*\
  !*** ./src/app/models/group-conversation.model.ts ***!
  \****************************************************/
/*! exports provided: GroupConversationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupConversationModel", function() { return GroupConversationModel; });
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/session.service */ "IfdK");
/* harmony import */ var _conversation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversation.model */ "JkB0");


class GroupConversationModel extends _conversation_model__WEBPACK_IMPORTED_MODULE_1__["ConversationModel"] {
    constructor() {
        super();
        this.instanceOf = "GROUP";
    }
    static isOwner(conversation) {
        return conversation.ownerId === _services_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"].getCurrentUser().id;
    }
}


/***/ }),

/***/ "21mK":
/*!***************************************************!*\
  !*** ./src/app/components/toast/toast.service.ts ***!
  \***************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ToastService {
    constructor() {
        this.toasts = [];
        this.toastsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.toasts$ = this.toastsSubject.asObservable();
    }
    show(content, isSuccess) {
        const classname = isSuccess ? 'bg-success' : 'bg-danger';
        const toast = {
            content: content,
            classname: `text-light ${classname}`
        };
        this.toasts.push(toast);
        this.toastsSubject.next(this.toasts);
    }
    remove(toast) {
        this.toasts = this.toasts.filter((t) => t !== toast);
        this.toastsSubject.next(this.toasts);
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2R26":
/*!*************************************************************************************!*\
  !*** ./src/app/components/change-password-modal/change-password-modal.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChangePasswordModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModalComponent", function() { return ChangePasswordModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var src_app_requests_change_password_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/requests/change-password.request */ "zR0G");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ChangePasswordModalComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
} }
class ChangePasswordModalComponent {
    constructor(ngbActiveModal, authService) {
        this.ngbActiveModal = ngbActiveModal;
        this.authService = authService;
        this.changePasswordRequest = new src_app_requests_change_password_request__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordRequest"]();
        this.loading = false;
    }
    onSaved() {
        this.loading = true;
        this.changePasswordRequest.userId = src_app_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"].getCurrentUser().id;
        this.authService.changePassword(this.changePasswordRequest).subscribe(() => {
            this.onClosed();
        }, (errorRes) => {
            this.loading = false;
            this.errorMessage = errorRes.error.message;
        });
    }
    onClosed() {
        this.ngbActiveModal.close();
    }
}
ChangePasswordModalComponent.ɵfac = function ChangePasswordModalComponent_Factory(t) { return new (t || ChangePasswordModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ChangePasswordModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordModalComponent, selectors: [["app-change-password-modal"]], decls: 24, vars: 6, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-2"], ["for", "old-password", 1, "form-label"], ["ngbAutofocus", "", "id", "old-password", "type", "password", "placeholder", "Type your old password", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "new-password", 1, "form-label"], ["id", "new-password", "type", "password", "placeholder", "Type your new password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Type your new password again", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"]], template: function ChangePasswordModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordModalComponent_Template_button_click_3_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Old password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordModalComponent_Template_input_ngModelChange_8_listener($event) { return ctx.changePasswordRequest.oldPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordModalComponent_Template_input_ngModelChange_12_listener($event) { return ctx.changePasswordRequest.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordModalComponent_Template_input_ngModelChange_14_listener($event) { return ctx.changePasswordRequest.confirmNewPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordModalComponent_Template_button_click_19_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordModalComponent_Template_button_click_21_listener() { return ctx.onSaved(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ChangePasswordModalComponent_span_22_Template, 1, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.changePasswordRequest.oldPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.changePasswordRequest.newPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.changePasswordRequest.confirmNewPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkLW1vZGFsL2NoYW5nZS1wYXNzd29yZC1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password-modal',
                templateUrl: './change-password-modal.component.html',
                styleUrls: ['./change-password-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "3ITz":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _utils_observable_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/observable.util */ "dQgq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class ContactService {
    constructor(http) {
        this.http = http;
        this.CONTACT_BASE_URL = `${_config__WEBPACK_IMPORTED_MODULE_3__["API_BASE_URL"]}/contacts`;
        this.contacts = new Map();
        this.receivedContactRequests = new Map();
        this.sentContactRequests = new Map();
        this.contactsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.contacts$ = this.contactsSubject.asObservable();
        this.receivedContactRequestsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.receivedContactRequests$ = this.receivedContactRequestsSubject.asObservable();
        this.sentContactRequestsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sentContactRequests$ = this.sentContactRequestsSubject.asObservable();
    }
    findContacts(userId) {
        return this.http.get(`${this.CONTACT_BASE_URL}/participants/${userId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            const foundContacts = res.data;
            this.contacts = new Map(foundContacts.map(contact => [contact.id, contact]));
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_4__["ObservableUtil"].notify(this.contactsSubject, foundContacts);
        }));
    }
    findReceivedContactRequests(userId) {
        return this.http.get(`${this.CONTACT_BASE_URL}/received/participants/${userId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            const foundReceivedContactRequests = res.data;
            this.receivedContactRequests = new Map(foundReceivedContactRequests.map(request => [request.id, request]));
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_4__["ObservableUtil"].notify(this.receivedContactRequestsSubject, foundReceivedContactRequests);
        }));
    }
    findSentContactRequests(userId) {
        return this.http.get(`${this.CONTACT_BASE_URL}/sent/participants/${userId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            const foundSentContactRequests = res.data;
            this.sentContactRequests = new Map(foundSentContactRequests.map(request => [request.id, request]));
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_4__["ObservableUtil"].notify(this.sentContactRequestsSubject, foundSentContactRequests);
        }));
    }
    sendRequest(contact) {
        return this.http.post(`${this.CONTACT_BASE_URL}`, contact)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            const newContactId = res.data;
            contact.id = newContactId;
            this.sentContactRequests.set(newContactId, contact);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_4__["ObservableUtil"].notify(this.sentContactRequestsSubject, this.sentContactRequests);
        }));
    }
    acceptRequest(contactId) {
        return this.http.patch(`${this.CONTACT_BASE_URL}/${contactId}`, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.receivedContactRequests.delete(contactId);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_4__["ObservableUtil"].notify(this.receivedContactRequestsSubject, this.receivedContactRequests);
        }));
    }
    declineRequest(contactId) {
        return this.http.delete(`${this.CONTACT_BASE_URL}/${contactId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.receivedContactRequests.delete(contactId);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_4__["ObservableUtil"].notify(this.receivedContactRequestsSubject, this.receivedContactRequests);
        }));
    }
    deleteSentRequest(contactId) {
        return this.http.delete(`${this.CONTACT_BASE_URL}/${contactId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.sentContactRequests.delete(contactId);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_4__["ObservableUtil"].notify(this.sentContactRequestsSubject, this.sentContactRequests);
        }));
    }
    deleteContact(contactId) {
        return this.http.delete(`${this.CONTACT_BASE_URL}/${contactId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.contacts.delete(contactId);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_4__["ObservableUtil"].notify(this.contactsSubject, this.contacts);
        }));
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4Em8":
/*!*****************************************!*\
  !*** ./src/app/models/message.model.ts ***!
  \*****************************************/
/*! exports provided: MessageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModel", function() { return MessageModel; });
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/session.service */ "IfdK");

class MessageModel {
    static isTextMessage(message) {
        return message.instanceOf === 'TEXT';
    }
    static isSentMessage(message) {
        const CURRENT_USER = _services_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"].getCurrentUser();
        return message.sender.id === CURRENT_USER.id;
    }
}


/***/ }),

/***/ "4gNh":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/join-group-conversation-modal/join-group-conversation-modal.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: JoinGroupConversationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinGroupConversationModalComponent", function() { return JoinGroupConversationModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/conversation.service */ "uTcX");






const _c0 = ["conversationIdInput"];
class JoinGroupConversationModalComponent {
    constructor(ngbActiveModal, toastService, conversationService) {
        this.ngbActiveModal = ngbActiveModal;
        this.toastService = toastService;
        this.conversationService = conversationService;
    }
    onJoined() {
        const conversationId = this.conversationIdInput.nativeElement.value;
        const joinerId = src_app_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"].getCurrentUser().id;
        this.conversationService.joinGroupConversation(conversationId, joinerId).subscribe(() => {
            this.onClosed();
            this.toastService.show("Conversation joined successfully", true);
        }, (error) => {
            this.errorMessage = error.error.message;
        });
    }
    onClosed() {
        this.ngbActiveModal.close();
    }
}
JoinGroupConversationModalComponent.ɵfac = function JoinGroupConversationModalComponent_Factory(t) { return new (t || JoinGroupConversationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_4__["ConversationService"])); };
JoinGroupConversationModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinGroupConversationModalComponent, selectors: [["app-join-group-conversation-modal"]], viewQuery: function JoinGroupConversationModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.conversationIdInput = _t.first);
    } }, decls: 17, vars: 1, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-2"], ["for", "conversationId", 1, "form-label"], ["id", "Confirm", "type", "text", "placeholder", "Type a conversation id", 1, "form-control"], ["conversationIdInput", ""], [1, "text-danger"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"]], template: function JoinGroupConversationModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Join group conversation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinGroupConversationModalComponent_Template_button_click_3_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Conversation id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinGroupConversationModalComponent_Template_button_click_13_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinGroupConversationModalComponent_Template_button_click_15_listener() { return ctx.onJoined(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9pbi1ncm91cC1jb252ZXJzYXRpb24tbW9kYWwvam9pbi1ncm91cC1jb252ZXJzYXRpb24tbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinGroupConversationModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-group-conversation-modal',
                templateUrl: './join-group-conversation-modal.component.html',
                styleUrls: ['./join-group-conversation-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }, { type: src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_4__["ConversationService"] }]; }, { conversationIdInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["conversationIdInput"]
        }] }); })();


/***/ }),

/***/ "5Ey6":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_requests_signup_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/requests/signup.request */ "Y5y+");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SignUpComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
} }
class SignUpComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.request = new src_app_requests_signup_request__WEBPACK_IMPORTED_MODULE_1__["SignupRequest"]();
        this.loading = false;
    }
    signUp() {
        this.loading = true;
        this.authService.signUp(this.request)
            .subscribe((res) => {
            src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].setCurrentUser(res.data);
            this.router.navigate(['/conversations']);
        }, (error) => {
            this.loading = false;
            this.errorMessage = error.error.message;
        });
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-signup"]], decls: 18, vars: 6, consts: [[1, "text-center", "font-weight-bold", "p-5"], [1, "form-group", "my-3"], ["type", "text", "placeholder", "User number", "autofocus", "", 1, "form-control", "py-2", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", 1, "form-control", "py-2", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Confirm password", 1, "form-control", "py-2", 3, "ngModel", "ngModelChange"], [1, "text-danger"], ["type", "button", 1, "btn", "form-control", "btn-success", "py-2", "mt-3", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "text-center", "p-2", "mt-5"], [1, "text-secondary"], ["routerLink", "/auth/signin"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_3_listener($event) { return ctx.request.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_5_listener($event) { return ctx.request.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_7_listener($event) { return ctx.request.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_10_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignUpComponent_span_11_Template, 1, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sign up\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Have already an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sign in now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "5j9j":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _view_modal_view_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view-modal/view-modal.component */ "tDCq");
/* harmony import */ var src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/conversation.model */ "JkB0");
/* harmony import */ var src_app_models_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/message.model */ "4Em8");
/* harmony import */ var src_app_models_group_conversation_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/group-conversation.model */ "1cIR");
/* harmony import */ var src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/file-util */ "JzVJ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/conversation.service */ "uTcX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["progressbarWrapper"];
const _c1 = ["progressbar"];
const _c2 = ["content"];
function MessageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MessageComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message.content);
} }
function MessageComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getInlineData(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MessageComponent_video_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 18);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.getInlineData(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MessageComponent_audio_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your browser does not support the audio tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.getInlineData(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MessageComponent_ng_container_14_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 30);
} }
function MessageComponent_ng_container_14_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 31);
} }
function MessageComponent_ng_container_14_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 32);
} }
function MessageComponent_ng_container_14_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function MessageComponent_ng_container_14_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function MessageComponent_ng_container_14_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageComponent_ng_container_14_ng_container_11_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onViewModalOpened(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MessageComponent_ng_container_14_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1) { return { "text-light": a0, "text-secondary": a1 }; };
function MessageComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MessageComponent_ng_container_14_i_3_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MessageComponent_ng_container_14_i_4_Template, 1, 0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessageComponent_ng_container_14_i_5_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MessageComponent_ng_container_14_i_6_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MessageComponent_ng_container_14_i_7_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MessageComponent_ng_container_14_ng_container_11_Template, 3, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MessageComponent_ng_container_14_div_12_Template, 5, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r5.messageType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "DOCUMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "SHEET");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "PRESENTATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "OTHER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("download", ctx_r5.message.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r5.getAttachmentData(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c3, ctx_r5.isSentMessage(), !ctx_r5.isSentMessage()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.message.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.messageType === "PDF" || ctx_r5.messageType === "OTHER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.message === ctx_r5.currentMessage);
} }
const _c4 = function (a0, a1) { return { "justify-content-end": a0, "justify-content-start": a1 }; };
const _c5 = function (a0, a1) { return { "bg-success text-light": a0, "bg-light-grey text-secondary": a1 }; };
class MessageComponent {
    constructor(ngbModal, conversationService, cd) {
        this.ngbModal = ngbModal;
        this.conversationService = conversationService;
        this.cd = cd;
        this.progress = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.fileUploadedSubscription = this.conversationService.fileUploaded$.subscribe((res) => {
            this.progress = res;
            this.updateProgress(this.progress);
        });
    }
    updateProgress(progress) {
        this.progress = progress;
        if (this.progress === 100) {
            this.progressbarWrapper.nativeElement.classList.add('d-none');
            this.progress = 0;
        }
        else {
            if (this.progressbarWrapper.nativeElement.classList.contains('d-none')) {
                this.progressbarWrapper.nativeElement.classList.remove('d-none');
            }
            this.progressbar.nativeElement.style.width = this.progress + '%';
            this.progressbar.nativeElement.innerHTML = this.progress + '%';
        }
    }
    ngOnDestroy() {
        this.fileUploadedSubscription.unsubscribe();
    }
    getAvatar() {
        return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_5__["FileUtil"].getURL(this.message.sender.avatarCode);
    }
    isSentMessage() {
        return src_app_models_message_model__WEBPACK_IMPORTED_MODULE_3__["MessageModel"].isSentMessage(this.message);
    }
    isOwner() {
        if (src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_2__["ConversationModel"].isGroupConversation(this.conversation) && src_app_models_group_conversation_model__WEBPACK_IMPORTED_MODULE_4__["GroupConversationModel"].isOwner(this.conversation)) {
            return this.message.sender.id === this.conversation.ownerId;
        }
    }
    getInlineData() {
        if (!src_app_models_message_model__WEBPACK_IMPORTED_MODULE_3__["MessageModel"].isTextMessage(this.message)) {
            const multimediaMessage = this.message;
            return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_5__["FileUtil"].getURL(multimediaMessage.fileCode);
        }
    }
    getAttachmentData() {
        if (!src_app_models_message_model__WEBPACK_IMPORTED_MODULE_3__["MessageModel"].isTextMessage(this.message)) {
            const multimediaMessage = this.message;
            return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_5__["FileUtil"].getAttachment(multimediaMessage.fileCode);
        }
    }
    onViewModalOpened() {
        const NGB_MODAL_OPTIONS = {
            backdrop: 'static',
            keyboard: false,
            size: 'fullscreen'
        };
        const modalRef = this.ngbModal.open(_view_modal_view_modal_component__WEBPACK_IMPORTED_MODULE_1__["ViewModalComponent"], NGB_MODAL_OPTIONS);
        modalRef.componentInstance.message = this.message;
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_7__["ConversationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], viewQuery: function MessageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressbarWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressbar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElement = _t.first);
    } }, inputs: { messageType: "messageType", message: "message", currentMessage: "currentMessage", conversation: "conversation" }, decls: 19, vars: 20, consts: [[1, "d-flex", "justify-content-start", "py-3", 3, "ngClass"], [1, "message-wrapper", "rounded", "p-2", 3, "ngClass"], [1, "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "mb-2"], ["alt", "Avatar", "width", "40", "height", "40", 1, "rounded-circle", 3, "src"], ["class", "ms-2", 4, "ngIf"], [1, "ms-2", "text-truncate"], [3, "ngSwitch"], ["class", "text-break", 4, "ngSwitchCase"], ["height", "250", "class", "rounded w-100 py-2", "alt", "image", 3, "src", 4, "ngSwitchCase"], ["height", "250", "class", "rounded py-2 w-100", "controls", "", 3, "src", 4, "ngSwitchCase"], ["controls", "", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "ms-2"], [1, "fa-solid", "fa-key"], [1, "text-break"], ["height", "250", "alt", "image", 1, "rounded", "w-100", "py-2", 3, "src"], ["height", "250", "controls", "", 1, "rounded", "py-2", "w-100", 3, "src"], ["controls", ""], ["type", "audio/mp3", 3, "src"], [1, "d-flex", "align-items-center", "p-1"], ["class", "fa-solid fa-file-word fa-3x m-2 me-3", 4, "ngSwitchCase"], ["class", "fa-solid fa-file-excel fa-3x m-2 me-3", 4, "ngSwitchCase"], ["class", "fa-solid fa-file-powerpoint fa-3x m-2 me-3", 4, "ngSwitchCase"], ["class", "fa-solid fa-file-pdf fa-3x m-2 me-3", 4, "ngSwitchCase"], ["class", "fa-solid fa-file fa-3x m-2 me-3", 4, "ngSwitchCase"], [1, "small", 3, "href", "download", "ngClass"], [4, "ngIf"], ["class", "progress d-none", "role", "progressbar", "aria-label", "Example with label", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 4, "ngIf"], [1, "fa-solid", "fa-file-word", "fa-3x", "m-2", "me-3"], [1, "fa-solid", "fa-file-excel", "fa-3x", "m-2", "me-3"], [1, "fa-solid", "fa-file-powerpoint", "fa-3x", "m-2", "me-3"], [1, "fa-solid", "fa-file-pdf", "fa-3x", "m-2", "me-3"], [1, "fa-solid", "fa-file", "fa-3x", "m-2", "me-3"], [1, "clickable", "small", "mt-2", 3, "click"], ["role", "progressbar", "aria-label", "Example with label", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "d-none"], ["progressbarWrapper", ""], [1, "progress-bar", "bg-info"], ["progressbar", ""]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessageComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MessageComponent_p_10_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MessageComponent_img_11_Template, 1, 1, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MessageComponent_video_12_Template, 1, 1, "video", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MessageComponent_audio_13_Template, 3, 1, "audio", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MessageComponent_ng_container_14_Template, 13, 15, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c4, ctx.isSentMessage(), !ctx.isSentMessage()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c5, ctx.isSentMessage(), !ctx.isSentMessage()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getAvatar(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOwner());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.sender.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.messageType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "TEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "IMAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "VIDEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "AUDIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 11, ctx.message.sentAt, "dd/MM/yyyy HH:mm:ss"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".message-wrapper[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    max-width: 70%;\r\n    min-width: 40%;\r\n}\r\n\r\n.bg-light-grey[_ngcontent-%COMP%] {\r\n    background-color: #f0f2f5;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    font-style: italic;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgbWluLXdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5iZy1saWdodC1ncmV5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XHJcbn1cclxuXHJcbi5jbGlja2FibGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xpY2thYmxlOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message',
                templateUrl: './message.component.html',
                styleUrls: ['./message.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_7__["ConversationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { messageType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], conversation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], progressbarWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['progressbarWrapper']
        }], progressbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['progressbar']
        }], contentElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }] }); })();


/***/ }),

/***/ "5kOt":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/received-contact-requests/received-contact-requests.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ReceivedContactRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivedContactRequestComponent", function() { return ReceivedContactRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-modal/confirm-modal.component */ "TL7l");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/file-util */ "JzVJ");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config */ "Vx+w");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ReceivedContactRequestComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceivedContactRequestComponent_div_12_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const receivedContactRequest_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onAccepted(receivedContactRequest_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceivedContactRequestComponent_div_12_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const receivedContactRequest_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onDeclined(receivedContactRequest_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const receivedContactRequest_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getAvatar(receivedContactRequest_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](receivedContactRequest_r1.sender.name);
} }
class ReceivedContactRequestComponent {
    constructor(ngbModal, toastService, cd, contactService) {
        this.ngbModal = ngbModal;
        this.toastService = toastService;
        this.cd = cd;
        this.contactService = contactService;
        this.receivedContactRequests = [];
        this.filteredReceivedContactRequests = [];
    }
    ngOnInit() {
        this.receivedContactRequestsSubscription = this.contactService.receivedContactRequests$
            .subscribe((receivedContactRequests) => {
            this.receivedContactRequests = receivedContactRequests;
            this.filteredReceivedContactRequests = this.receivedContactRequests;
            this.cd.detectChanges();
        });
        this.contactService.findReceivedContactRequests(src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].getCurrentUser().id).subscribe(() => { }, (error) => this.toastService.show('Received loaded failed', false));
    }
    ngOnDestroy() {
        this.receivedContactRequestsSubscription.unsubscribe();
    }
    getAvatar(contact) {
        return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].getURL(contact.sender.avatarCode);
    }
    onSearched(value) {
        if (value === null) {
            this.filteredReceivedContactRequests = this.receivedContactRequests;
            return;
        }
        const foundReceivedContactRequests = this.receivedContactRequests.filter(contact => {
            return contact.sender.name.toLowerCase().includes(value.toLowerCase());
        });
        this.filteredReceivedContactRequests = foundReceivedContactRequests;
    }
    onAccepted(receivedContactRequest) {
        const modalRef = this.ngbModal.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmModalComponent"], src_app_config__WEBPACK_IMPORTED_MODULE_4__["NGB_MODAL_BACKDROP_STATIC_OPTIONS"]);
        this.modalConfirmedSubscription = modalRef.componentInstance.onModalConfirmed()
            .subscribe(() => {
            this.contactService.acceptRequest(receivedContactRequest.id).subscribe(() => {
                this.toastService.show('Contact request accepted', true);
            }, (error) => console.log(error));
            this.modalConfirmedSubscription.unsubscribe();
            modalRef.close();
        });
    }
    onDeclined(receivedContactRequest) {
        const modalRef = this.ngbModal.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmModalComponent"], src_app_config__WEBPACK_IMPORTED_MODULE_4__["NGB_MODAL_BACKDROP_STATIC_OPTIONS"]);
        this.modalConfirmedSubscription = modalRef.componentInstance.onModalConfirmed()
            .subscribe(() => {
            this.contactService.declineRequest(receivedContactRequest.id).subscribe(() => {
                this.toastService.show('Contact request declined', true);
            }, (errorRes) => this.toastService.show(errorRes.error.message, false));
            this.modalConfirmedSubscription.unsubscribe();
            modalRef.close();
        });
    }
}
ReceivedContactRequestComponent.ɵfac = function ReceivedContactRequestComponent_Factory(t) { return new (t || ReceivedContactRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"])); };
ReceivedContactRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReceivedContactRequestComponent, selectors: [["app-received-contact-requests"]], decls: 13, vars: 1, consts: [[1, "d-flex", "flex-column", "h-100"], [1, "d-flex", "align-items-center", "border-bottom", "ms-3", "py-2", "py-1"], [1, "fa-regular", "fa-envelope", "fa-2x", "me-3"], [1, "text-secondary", "my-auto", "font-weight-bold", "h4", "py-2"], [1, "d-flex", "align-items-center", "m-2"], [1, "input-group", "py-2"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "input"], [1, "border-bottom", "overflow-auto", "h-100", "w-100", "pe-3", "flex-grow-1"], [1, "list-group", "list-group-flush"], ["class", "list-group-item list-group-item-action", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], ["alt", " ", "width", "50", "height", "50", 1, "rounded-circle", 3, "src"], [1, "ms-3", "w-100"], [1, "my-auto", "text-truncate", "font-weight-bold", "flex-grow-1"], [1, "d-flex", "justify-content-end", "align-items-center"], ["type", "button", 1, "btn", "btn-white", "me-1", 3, "click"], [1, "fa-solid", "fa-check", "fa-lg", "text-success"], ["type", "button", 1, "btn", "btn-white", 3, "click"], [1, "fa-solid", "fa-x", "fa-lg", "text-danger"]], template: function ReceivedContactRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Received contact requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ReceivedContactRequestComponent_Template_input_input_9_listener($event) { return ctx.onSearched($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReceivedContactRequestComponent_div_12_Template, 12, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredReceivedContactRequests);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjZWl2ZWQtY29udGFjdC1yZXF1ZXN0cy9yZWNlaXZlZC1jb250YWN0LXJlcXVlc3RzLmNvbXBvbmVudC5jc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReceivedContactRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-received-contact-requests',
                templateUrl: './received-contact-requests.component.html',
                styleUrls: ['./received-contact-requests.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "5lUJ":
/*!****************************************************!*\
  !*** ./src/app/models/multimedia-message.model.ts ***!
  \****************************************************/
/*! exports provided: MultimediaMessageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaMessageModel", function() { return MultimediaMessageModel; });
/* harmony import */ var _message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.model */ "4Em8");

class MultimediaMessageModel extends _message_model__WEBPACK_IMPORTED_MODULE_0__["MessageModel"] {
    constructor() {
        super();
        this.instanceOf = "MULTIMEDIA";
    }
    static isOtherType(message) {
        return !_message_model__WEBPACK_IMPORTED_MODULE_0__["MessageModel"].isTextMessage(message) && message.fileType === 'OTHER';
    }
}


/***/ }),

/***/ "97e/":
/*!*********************************************************************************!*\
  !*** ./src/app/components/conversation-detail/conversation-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConversationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationDetailComponent", function() { return ConversationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/conversation.model */ "JkB0");
/* harmony import */ var src_app_models_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/message.model */ "4Em8");
/* harmony import */ var _group_conversation_modal_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../group-conversation-modal/group-conversation-modal.component */ "t9Cg");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirm-modal/confirm-modal.component */ "TL7l");
/* harmony import */ var _voice_recorder_modal_voice_recorder_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../voice-recorder-modal/voice-recorder-modal.component */ "iWTV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_text_message_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/text-message.model */ "UvuN");
/* harmony import */ var src_app_models_multimedia_message_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/multimedia-message.model */ "5lUJ");
/* harmony import */ var src_app_models_group_conversation_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/group-conversation.model */ "1cIR");
/* harmony import */ var src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/utils/file-util */ "JzVJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/conversation.service */ "uTcX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../message/message.component */ "5j9j");




















const _c0 = ["fileInput"];
const _c1 = ["chatWindow"];
const _c2 = ["messageElements"];
function ConversationDetailComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.conversation.participants.length, " participants");
} }
function ConversationDetailComponent_ng_container_0_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConversationDetailComponent_ng_container_0_ng_container_18_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.onCopyLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Copy link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConversationDetailComponent_ng_container_0_ng_container_18_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.onLeaveGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Leave group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ConversationDetailComponent_ng_container_0_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-message", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", message_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r4.isSentMessage(message_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("conversation", ctx_r4.conversation)("currentMessage", ctx_r4.currentMessage)("message", message_r10)("messageType", ctx_r4.getMessageType(message_r10));
} }
function ConversationDetailComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConversationDetailComponent_ng_container_0_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.openUpdateGroupConversationModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ConversationDetailComponent_ng_container_0_ng_container_8_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ConversationDetailComponent_ng_container_0_ng_container_18_Template, 10, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ConversationDetailComponent_ng_container_0_Template_div_scroll_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ConversationDetailComponent_ng_container_0_ng_container_22_Template, 4, 6, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConversationDetailComponent_ng_container_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.activateScrollToBottomMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConversationDetailComponent_ng_container_0_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onFileChosen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ConversationDetailComponent_ng_container_0_Template_input_change_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConversationDetailComponent_ng_container_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onVoiceRecorderModalOpened(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function ConversationDetailComponent_ng_container_0_Template_input_keyup_enter_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.sendTextMessage(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.getAvatar(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getName());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isGroupConversation());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isGroupConversation());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.conversation == null ? null : ctx_r0.conversation.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invisible", ctx_r0.scrollToBottomMode);
} }
class ConversationDetailComponent {
    constructor(activatedRoute, ngbModal, router, cd, toastService, conversationService) {
        this.activatedRoute = activatedRoute;
        this.ngbModal = ngbModal;
        this.router = router;
        this.cd = cd;
        this.toastService = toastService;
        this.conversationService = conversationService;
        this.page = 0;
        this.scrollToBottomMode = true;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((params) => {
            const conversationId = params.get('id');
            return this.conversationService.findOne(conversationId, src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"].getCurrentUser().id);
        })).subscribe(() => {
            this.conversationService.markConversationAsRead(this.conversation.id);
        });
        this.conversationSubscription = this.conversationService.curentConversation$.subscribe((conversation) => {
            this.conversation = conversation;
            this.cd.detectChanges();
        });
        this.conversationService.subscribeMarkNewMessageAsRead();
    }
    ngOnDestroy() {
        this.conversationSubscription.unsubscribe();
    }
    onScroll(event) {
        this.scrollToBottomMode = event.target.scrollTop === 0;
        if (event.target.scrollHeight + event.target.scrollTop === event.target.clientHeight) {
            this.page++;
            this.conversationService.fetchMessages(this.conversation.id, this.page).subscribe();
        }
    }
    getAvatar() {
        return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_12__["FileUtil"].getURL(src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_2__["ConversationModel"].getAvatarCode(this.conversation));
    }
    getName() {
        return src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_2__["ConversationModel"].getName(this.conversation);
    }
    activateScrollToBottomMode() {
        this.scrollToBottomMode = true;
        this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
        console.log(this.chatWindow.nativeElement.scrollTop);
    }
    isSentMessage(message) {
        return src_app_models_message_model__WEBPACK_IMPORTED_MODULE_3__["MessageModel"].isSentMessage(message);
    }
    isGroupConversation() {
        return src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_2__["ConversationModel"].isGroupConversation(this.conversation);
    }
    openUpdateGroupConversationModal() {
        if (src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_2__["ConversationModel"].isGroupConversation(this.conversation) && src_app_models_group_conversation_model__WEBPACK_IMPORTED_MODULE_11__["GroupConversationModel"].isOwner(this.conversation)) {
            const modalRef = this.ngbModal.open(_group_conversation_modal_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_4__["GroupConversationModalComponent"]);
            modalRef.componentInstance.isCreationMode = false;
        }
    }
    getMessageType(message) {
        return src_app_models_message_model__WEBPACK_IMPORTED_MODULE_3__["MessageModel"].isTextMessage(message) ? message.instanceOf : message.fileType;
    }
    sendTextMessage(inputElement) {
        if (inputElement.value.trim() === '') {
            return;
        }
        const message = new src_app_models_text_message_model__WEBPACK_IMPORTED_MODULE_9__["TextMessageModel"]();
        message.sender = src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"].getCurrentUser();
        message.content = inputElement.value;
        message.conversationId = this.conversation.id;
        inputElement.value = '';
        this.scrollToBottomMode = true;
        this.conversationService.sendTextMessage(message);
    }
    onCopyLink() {
        navigator.clipboard.writeText(`${this.conversation.id}`);
        this.toastService.show('Group id copied', true);
    }
    onLeaveGroup() {
        const modalRef = this.ngbModal.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"]);
        this.modalConfirmedSubscription = modalRef.componentInstance.onModalConfirmed()
            .subscribe(() => {
            this.conversationService.leaveGroupConversation(this.conversation.id, src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"].getCurrentUser().id).subscribe(() => {
                this.modalConfirmedSubscription.unsubscribe();
                modalRef.close();
                this.router.navigate(['/conversations']);
                this.toastService.show("Conversation left successfully", true);
            }, (errorRes) => this.toastService.show(errorRes.error.message, false));
        });
    }
    onFileChosen() {
        this.fileInput.nativeElement.click();
    }
    onFileSelected(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const selectedFile = event.target.files[0];
            if (!selectedFile) {
                return;
            }
            const message = new src_app_models_multimedia_message_model__WEBPACK_IMPORTED_MODULE_10__["MultimediaMessageModel"]();
            message.conversationId = this.conversation.id;
            message.sender = src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"].getCurrentUser();
            message.fileName = selectedFile.name;
            message.conversationId = this.conversation.id;
            message.fileName = selectedFile.name;
            message.fileType = src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_12__["FileUtil"].getType(selectedFile);
            this.scrollToBottomMode = true;
            this.conversationService.sendMultimediaMessage(message, selectedFile).subscribe((res) => {
                this.toastService.show('File uploaded successfully', true);
            }, (errorRes) => this.toastService.show(errorRes.error.message, false));
            this.fileInput.nativeElement.value = '';
        });
    }
    onVoiceRecorderModalOpened() {
        const NGB_MODAL_OPTIONS = {
            backdrop: 'static',
            keyboard: false,
            centered: true,
            size: 'lg'
        };
        this.ngbModal.open(_voice_recorder_modal_voice_recorder_modal_component__WEBPACK_IMPORTED_MODULE_7__["VoiceRecorderModalComponent"], NGB_MODAL_OPTIONS);
    }
}
ConversationDetailComponent.ɵfac = function ConversationDetailComponent_Factory(t) { return new (t || ConversationDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_15__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_16__["ConversationService"])); };
ConversationDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConversationDetailComponent, selectors: [["app-conversation-detail"]], viewQuery: function ConversationDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chatWindow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messageElements = _t);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "d-flex", "flex-column", "h-100", "w-100"], [1, "d-flex", "justify-content-between", "border-bottom", "px-2", "py-1", "flex-grow-0", "w-100"], [1, "d-flex", "align-items-center", 2, "width", "40%"], ["alt", "ChatAvatar", "width", "50", "height", "50", 1, "rounded-circle", 3, "src", "click"], [1, "ms-3", "overflow-hidden"], [1, "h6", "text-truncate", "font-weight-bold"], [1, "d-flex", "align-items-center"], ["aria-hidden", "true", 1, "fas", "fa-video-camera", "p-3"], ["aria-hidden", "true", 1, "fas", "fa-phone", "p-3"], ["aria-hidden", "true", 1, "fas", "fa-search", "p-3"], [1, "input-group", "p-3", "d-none"], [1, "input-group-prepend"], [1, "input-group-text"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["type", "text", "placeholder", "Search messages...", 1, "form-control"], [1, "position-relative", "overflow-hidden", "border-bottom", "flex-grow-1"], ["chatWindow", ""], [1, "h-100", "overflow-y-auto", "overflow-x-hidden", "d-flex", "flex-column-reverse", 3, "scroll"], [4, "ngFor", "ngForOf"], [1, "position-absolute", "start-50", "bottom-0", "translate-middle-x", "mb-2"], ["type", "button", 1, "btn", "btn-success", "rounded-circle", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-arrow-down"], [1, "d-flex", "align-items-center", "flex-grow-0"], ["type", "button", 1, "btn", 3, "click"], ["type", "file", 1, "d-none", 3, "change"], ["fileInput", ""], ["aria-hidden", "true", 1, "fas", "fa-paperclip", "py-3", "px-1"], ["aria-hidden", "true", 1, "fas", "fa-microphone", "py-3", "px-1"], [1, "flex-grow-1"], ["type", "text", "placeholder", "Type a message...", 1, "py-3", "form-control", 3, "keyup.enter"], ["textInput", ""], ["id", "conversationDetailEllipsisDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "fas", "fa-ellipsis-vertical", "p-3"], [1, "dropdown"], ["aria-labelledby", "conversationDetailEllipsisDropdown", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "dropdown-item", "text-danger", 3, "click"], [3, "ngSwitch", "id"], [3, "conversation", "currentMessage", "message", "messageType"], ["messageElements", ""]], template: function ConversationDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ConversationDetailComponent_ng_container_0_Template, 37, 7, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.conversation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgSwitch"], _message_message_component__WEBPACK_IMPORTED_MODULE_18__["MessageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udmVyc2F0aW9uLWRldGFpbC9jb252ZXJzYXRpb24tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConversationDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-conversation-detail',
                templateUrl: './conversation-detail.component.html',
                styleUrls: ['./conversation-detail.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_15__["ToastService"] }, { type: src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_16__["ConversationService"] }]; }, { fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['fileInput']
        }], messageElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['messageElements']
        }], chatWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['chatWindow']
        }] }); })();


/***/ }),

/***/ "AlA3":
/*!*******************************************************************************!*\
  !*** ./src/app/components/find-contact-modal/find-contact-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FindContactModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindContactModelComponent", function() { return FindContactModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var src_app_models_contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/contact.model */ "BYzK");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user.model */ "Tj/N");
/* harmony import */ var src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/file-util */ "JzVJ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function FindContactModelComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getAvatar(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.foundUser.name);
} }
class FindContactModelComponent {
    constructor(ngbActiveModal, contactService, toastService, userService) {
        this.ngbActiveModal = ngbActiveModal;
        this.contactService = contactService;
        this.toastService = toastService;
        this.userService = userService;
    }
    getAvatar() {
        return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_4__["FileUtil"].getURL(this.foundUser.avatarCode);
    }
    onUserFound(value) {
        const userId = value;
        if (userId == src_app_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"].getCurrentUser().id) {
            this.disabled = true;
            this.foundUser = src_app_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"].getCurrentUser();
            return;
        }
        this.disabled = false;
        this.userService.findOne(userId).subscribe((res) => {
            this.foundUser = res.data;
            this.errorMessage = "";
        }, (errorRes) => {
            this.foundUser = null;
            this.errorMessage = errorRes.error.message;
        });
    }
    onSent() {
        if (!this.foundUser) {
            this.errorMessage = "User not found";
            return;
        }
        const contact = new src_app_models_contact_model__WEBPACK_IMPORTED_MODULE_2__["ContactModel"]();
        const sender = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"](src_app_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"].getCurrentUser().id);
        const receiver = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"](this.foundUser.id);
        contact.sender = sender;
        contact.receiver = receiver;
        this.contactService.sendRequest(contact).subscribe(() => {
            this.toastService.show('Contact request sent', true);
            this.ngbActiveModal.close();
        }, (errorRes) => {
            this.errorMessage = errorRes.error.message;
        });
    }
    onClosed() {
        this.ngbActiveModal.close();
    }
}
FindContactModelComponent.ɵfac = function FindContactModelComponent_Factory(t) { return new (t || FindContactModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
FindContactModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FindContactModelComponent, selectors: [["app-find-contact-modal"]], decls: 21, vars: 3, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", "data-bs-dismiss", "modal", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-5", "row"], [1, "col-9"], ["type", "text", "placeholder", "Type an user id", 1, "form-control"], ["fileInput", ""], [1, "col-3"], [1, "btn", "btn-success", "w-100", 3, "click"], [4, "ngIf"], [1, "mb-2"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "mb-2", "d-flex", "justify-content-center"], ["width", "100", "height", "100", 1, "rounded-circle", "border", "border-secondary", 3, "src"], ["for", "nameInput", 1, "form-label"], ["id", "nameInput", "type", "text", "disabled", "", 1, "form-control", 3, "value"]], template: function FindContactModelComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FindContactModelComponent_Template_button_click_3_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FindContactModelComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.onUserFound(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FindContactModelComponent_ng_container_12_Template, 7, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FindContactModelComponent_Template_button_click_17_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FindContactModelComponent_Template_button_click_19_listener() { return ctx.onSent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Send request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.foundUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmluZC1jb250YWN0LW1vZGFsL2ZpbmQtY29udGFjdC1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FindContactModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-find-contact-modal',
                templateUrl: './find-contact-modal.component.html',
                styleUrls: ['./find-contact-modal.component.css'],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }, { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }]; }, null); })();


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

/***/ "BYzK":
/*!*****************************************!*\
  !*** ./src/app/models/contact.model.ts ***!
  \*****************************************/
/*! exports provided: ContactModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModel", function() { return ContactModel; });
class ContactModel {
}


/***/ }),

/***/ "COqc":
/*!*****************************************************!*\
  !*** ./src/app/components/toast/toast.component.ts ***!
  \*****************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.service */ "21mK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





function ToastComponent_ngb_toast_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastComponent_ngb_toast_1_Template_ngb_toast_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const toast_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClicked(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toast_r1.classname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autohide", true)("delay", 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](toast_r1.content);
} }
class ToastComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.toasts = [];
    }
    ngOnInit() {
        this.toastSubscription = this.toastService.toasts$.subscribe((toasts) => {
            this.toasts = toasts;
        });
    }
    ngOnDestroy() {
        this.toastSubscription.unsubscribe();
    }
    onClicked(toast) {
        this.toastService.remove(toast);
    }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastComponent, selectors: [["app-toast"]], decls: 2, vars: 1, consts: [[1, "position-fixed", "bottom-0", "end-0", "p-3"], [3, "class", "autohide", "delay", "click", 4, "ngFor", "ngForOf"], [3, "autohide", "delay", "click"], [1, "toast-body"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastComponent_ngb_toast_1_Template, 4, 5, "ngb-toast", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"]], styles: [".toast[_ngcontent-%COMP%] {\r\n    --bs-toast-padding-x: 0.5rem;\r\n}\r\n\r\n.toast[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2FzdCB7XHJcbiAgICAtLWJzLXRvYXN0LXBhZGRpbmcteDogMC41cmVtO1xyXG59XHJcblxyXG4udG9hc3Q6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toast',
                templateUrl: './toast.component.html',
                styleUrls: ['./toast.component.css']
            }]
    }], function () { return [{ type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "Ediw":
/*!***********************************************************************************!*\
  !*** ./src/app/components/delete-account-modal/delete-account-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DeleteAccountModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAccountModalComponent", function() { return DeleteAccountModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_requests_delete_account_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/requests/delete-account.request */ "vTWv");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["passwordInput"];
function DeleteAccountModalComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
} }
class DeleteAccountModalComponent {
    constructor(ngbActiveModal, router, toastService, authService) {
        this.ngbActiveModal = ngbActiveModal;
        this.router = router;
        this.toastService = toastService;
        this.authService = authService;
        this.loading = false;
    }
    onDelete() {
        this.loading = true;
        const request = new src_app_requests_delete_account_request__WEBPACK_IMPORTED_MODULE_1__["DeleteAccountRequest"]();
        request.userId = src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].getCurrentUser().id;
        request.password = this.passwordInput.nativeElement.value;
        this.authService.deleteAccount(request).subscribe(() => {
            this.onClosed();
            this.toastService.show('Account deleted successfully', true);
            this.router.navigate(['/auth/signin']);
        }, (errorRes) => {
            this.loading = false;
            this.errorMessage = errorRes.error.message;
        });
    }
    onClosed() {
        this.ngbActiveModal.close();
    }
}
DeleteAccountModalComponent.ɵfac = function DeleteAccountModalComponent_Factory(t) { return new (t || DeleteAccountModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
DeleteAccountModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteAccountModalComponent, selectors: [["app-delete-account-modal"]], viewQuery: function DeleteAccountModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.passwordInput = _t.first);
    } }, decls: 19, vars: 3, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-2"], ["for", "passwordInput", 1, "form-label"], ["ngbAutofocus", "", "id", "passwordInput", "type", "password", "placeholder", "Type your password to confirm", 1, "form-control"], ["passwordInput", ""], [1, "text-danger"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"]], template: function DeleteAccountModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteAccountModalComponent_Template_button_click_3_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteAccountModalComponent_Template_button_click_14_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteAccountModalComponent_Template_button_click_16_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DeleteAccountModalComponent_span_17_Template, 1, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLWFjY291bnQtbW9kYWwvZGVsZXRlLWFjY291bnQtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteAccountModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-account-modal',
                templateUrl: './delete-account-modal.component.html',
                styleUrls: ['./delete-account-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, { passwordInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['passwordInput']
        }] }); })();


/***/ }),

/***/ "FZwn":
/*!*****************************************************************************!*\
  !*** ./src/app/components/conversation-list/conversation-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConversationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationListComponent", function() { return ConversationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/conversation.model */ "JkB0");
/* harmony import */ var src_app_models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/message.model */ "4Em8");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/file-util */ "JzVJ");
/* harmony import */ var src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/conversation.service */ "uTcX");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











function ConversationListComponent_a_17_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/conversations", a1]; };
function ConversationListComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConversationListComponent_a_17_small_13_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conversation_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("conversation", conversation_r1)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, conversation_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getAvatar(conversation_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getName(conversation_r1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, conversation_r1.lastestMessage == null ? null : conversation_r1.lastestMessage.sentAt, "dd/MM/yyyy HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getLastestMessage(conversation_r1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversation_r1.hasNewMessage);
} }
class ConversationListComponent {
    constructor(conversationService, cd, toastService) {
        this.conversationService = conversationService;
        this.cd = cd;
        this.toastService = toastService;
        this.conversations = [];
        this.filteredConversations = [];
    }
    ngOnInit() {
        this.conversationsSubscription = this.conversationService.conversations$
            .subscribe((changedConversations) => {
            this.conversations = changedConversations;
            this.filteredConversations = this.conversations;
            this.cd.detectChanges();
        });
        this.conversationService.findAll(src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"].getCurrentUser().id).subscribe(() => { }, (error) => {
            this.toastService.show('Conversations loaded failed', false);
        });
    }
    ngOnDestroy() {
        this.conversationsSubscription.unsubscribe();
    }
    getAvatar(conversation) {
        return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_4__["FileUtil"].getURL(src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_1__["ConversationModel"].getAvatarCode(conversation));
    }
    getName(conversation) {
        return src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_1__["ConversationModel"].getName(conversation);
    }
    getLastestMessage(conversation) {
        if (conversation.lastestMessage === null) {
            return '';
        }
        const lastestMessage = conversation.lastestMessage;
        // Handle text message
        if (src_app_models_message_model__WEBPACK_IMPORTED_MODULE_2__["MessageModel"].isTextMessage(lastestMessage)) {
            const textMessage = lastestMessage;
            return `${lastestMessage.sender.name}: ${textMessage.content}`;
        }
        // Handle multimedia message
        let LASTEST_MESSAGE_CONTENT = `${lastestMessage.sender.name} has sent`;
        // if (MessageModel.isOtherType(lastestMessage)){
        //   return `${LASTEST_MESSAGE_CONTENT} a file`;
        // }
        const multimediaMessage = lastestMessage;
        return `${lastestMessage.sender.name} has sent a ${multimediaMessage.fileType}`;
    }
    onSearched(value) {
        if (value === '') {
            this.filteredConversations = this.filteredConversations;
            return;
        }
        // this.filteredConversations = this.filteredConversations.filter(conversation => 
        //   conversation.name.toLowerCase().includes(value.toLowerCase()));
    }
    onSelectChanged(event) {
        const selectElement = event.target;
        const selectedValue = selectElement.value;
        if (selectedValue === 'ALL') {
            this.filteredConversations = this.conversations;
            return;
        }
        if (selectedValue === 'GROUP') {
            this.filteredConversations = this.conversations.filter(conversation => src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_1__["ConversationModel"].isGroupConversation(conversation));
            return;
        }
        this.filteredConversations = this.conversations.filter(conversation => !src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_1__["ConversationModel"].isGroupConversation(conversation));
    }
}
ConversationListComponent.ɵfac = function ConversationListComponent_Factory(t) { return new (t || ConversationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_5__["ConversationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"])); };
ConversationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConversationListComponent, selectors: [["app-conversation-list"]], decls: 18, vars: 1, consts: [[1, "d-flex", "flex-column", "h-100"], [1, "flex-grow-0", "d-flex", "align-items-center", "pe-2"], [1, "m-2", "flex-grow-1"], [1, "input-group"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "input"], [1, "flex-grow-0"], [1, "form-select", 3, "change"], ["selected", "", "value", "ALL"], ["value", "GROUP"], ["value", "INDIVIDUAL"], [1, "flex-grow-1", "overflow-x-hidden", "overflow-y-audo"], [1, "list-group"], ["class", "list-group-item list-group-item-action text-secondary", "routerLinkActive", "selected", 3, "conversation", "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "selected", 1, "list-group-item", "list-group-item-action", "text-secondary", 3, "conversation", "routerLink"], [1, "d-flex", "align-items-center"], ["alt", " ", "width", "50", "height", "50", 1, "rounded-circle", 3, "src"], [1, "ms-3", "min-w-0", "w-100"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "my-auto", "text-truncate", "text-dark", "flex-grow-1"], [1, "my-auto", "ms-3", "flex-shrink-0"], [1, "d-flex", "justify-content-between", "mt-2"], [1, "my-auto", "text-truncate", "flex-grow-1"], ["class", "flex-shrink-0 my-auto badge bg-success rounded-pill ms-3", 4, "ngIf"], [1, "flex-shrink-0", "my-auto", "badge", "bg-success", "rounded-pill", "ms-3"]], template: function ConversationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ConversationListComponent_Template_input_input_6_listener($event) { return ctx.onSearched($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConversationListComponent_Template_select_change_8_listener($event) { return ctx.onSelectChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Individual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ConversationListComponent_a_17_Template, 14, 12, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredConversations);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".list-group[_ngcontent-%COMP%] {\r\n    height: 1px;\r\n}\r\n\r\n.min-w-0[_ngcontent-%COMP%]  {\r\n    min-width: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb252ZXJzYXRpb24tbGlzdC9jb252ZXJzYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udmVyc2F0aW9uLWxpc3QvY29udmVyc2F0aW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4ubWluLXctMCAge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConversationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-conversation-list',
                templateUrl: './conversation-list.component.html',
                styleUrls: ['./conversation-list.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_5__["ConversationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stomp/rx-stomp */ "G0rV");
/* harmony import */ var src_app_services_stomp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stomp.service */ "tSxv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function MainComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class MainComponent {
    constructor(stompService) {
        this.stompService = stompService;
        this.render = false;
    }
    ngOnInit() {
        this.stompService.connect();
        this.stompService.onConnected().subscribe((state) => {
            if (state === _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1__["RxStompState"].OPEN) {
                this.render = true;
            }
        });
    }
    ngOnDestroy() {
        this.stompService.disconnect();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stomp_service__WEBPACK_IMPORTED_MODULE_2__["StompService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 2, vars: 1, consts: [[1, "d-flex", "p-0", "h-100", "w-100"], [4, "ngIf"], [1, "flex-grow-1", 2, "width", "90%"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_ng_container_1_Template, 4, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.render == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: src_app_services_stomp_service__WEBPACK_IMPORTED_MODULE_2__["StompService"] }]; }, null); })();


/***/ }),

/***/ "IfdK":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
class SessionService {
    static getCurrentUser() {
        return JSON.parse(sessionStorage.getItem(SessionService.CURRENT_USER_KEY));
    }
    static setCurrentUser(currentUser) {
        sessionStorage.setItem(SessionService.CURRENT_USER_KEY, JSON.stringify(currentUser));
    }
}
SessionService.CURRENT_USER_KEY = "currentUser";


/***/ }),

/***/ "JcAc":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WelcomeComponent {
    constructor() { }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 13, vars: 0, consts: [[1, "flex-grow-1", "text-center", "d-flex", "flex-column", "align-content-center", 2, "padding-top", "15%"], [1, "h1", "mb-3", "text-success"], [1, "mt-3", "small", "mx-auto", 2, "width", "70%"], [1, "mt-5"], [1, "mt-2"], ["href", "https://github.com/markismorehandsomethanelon", "target", "_blank", 1, "me-5", "text-success"], ["aria-hidden", "true", 1, "fa-brands", "fa-lg", "fa-github"], ["href", "https://www.facebook.com/61552512084013", "target", "_blank", 1, "me-5", "text-success"], ["aria-hidden", "true", 1, "fa-brands", "fa-lg", "fa-facebook"], ["href", "https://www.instagram.com/tinhlam533", "target", "_blank", 1, "me-5", "text-success"], ["aria-hidden", "true", 1, "fa-brands", "fa-lg", "fa-instagram"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to Tchat website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Easy chats, stay connected. Simple, friendly app for sharing and talking. Connect effortlessly, build relationships. Your go-to for easy and meaningful conversations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".welcome-text[_ngcontent-%COMP%] {\n    margin-top: 20%;\n}\n\n.welcome-content[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLXRleHQge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbn1cblxuLndlbGNvbWUtY29udGVudCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JkB0":
/*!**********************************************!*\
  !*** ./src/app/models/conversation.model.ts ***!
  \**********************************************/
/*! exports provided: ConversationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationModel", function() { return ConversationModel; });
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/session.service */ "IfdK");

class ConversationModel {
    constructor() {
        this.hasNewMessage = false;
        this.lastestMessage = null;
        this.messages = [];
        this.participants = [];
    }
    static isGroupConversation(conversation) {
        return conversation.instanceOf === 'GROUP';
    }
    static getAvatarCode(conversation) {
        if (this.isGroupConversation(conversation)) {
            return conversation.avatarCode;
        }
        return conversation.participants.find(participant => participant.id !== _services_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"].getCurrentUser().id).avatarCode;
        ;
    }
    static getName(conversation) {
        if (this.isGroupConversation(conversation)) {
            return conversation.name;
        }
        return conversation.participants.find(participant => participant.id !== _services_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"].getCurrentUser().id).name;
    }
}


/***/ }),

/***/ "JzVJ":
/*!************************************!*\
  !*** ./src/app/utils/file-util.ts ***!
  \************************************/
/*! exports provided: FileUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUtil", function() { return FileUtil; });
class FileUtil {
    // static getURL(fileCode: string) {
    //   return `http://localhost:4200/api/v2/files/${fileCode}?${Date.now()}`;
    // }
    static getURL(fileCode) {
        return `http://localhost:4200/api/v2/files/inline/${fileCode}`;
    }
    static getAttachment(fileCode) {
        return `http://localhost:4200/api/v2/files/attachment/${fileCode}`;
    }
    //   static getBase64FromBinary(data: string, contentType: string): string {
    //     return "data:" + contentType + ";base64," + data;
    //   }
    // static async getFileDataWithReader(file: File): Promise<FileDataModel> {
    //   return new Promise<FileDataModel>((resolve, reject) => {
    //     const fileData: FileDataModel = new FileDataModel();
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //      fileData.data = e.target.result.toString().split(',')[1];
    //      fileData.contentType = file.type;
    //      fileData.extension = file.name.split('.').pop();
    //      resolve(fileData);
    //     };
    //     reader.onerror = (e) => {
    //      reject(e);
    //     };
    //     reader.readAsDataURL(file);
    //   });
    //  }
    static getType(file) {
        const fileType = file.type;
        const typeMap = {
            'AUDIO': ['audio/mpeg', 'audio/mp3'],
            'VIDEO': ['video/mp4', 'video/mpeg'],
            'IMAGE': ['image/jpeg', 'image/png', 'image/gif'],
            'DOCUMENT': [
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/msword',
            ],
            'PDF': [
                'application/pdf',
            ],
            'SHEET': [
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            ],
            'PRESENTATION': [
                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            ]
        };
        for (const type in typeMap) {
            if (typeMap[type].includes(fileType)) {
                return type;
            }
        }
        return 'OTHER';
    }
}


/***/ }),

/***/ "JzmT":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class PageNotFoundComponent {
    constructor(location) {
        this.location = location;
    }
    goBack() {
        this.location.back();
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 8, vars: 0, consts: [[1, "flex-grow-1", "text-center", "d-flex", "flex-column", "align-content-center", 2, "padding-top", "5%"], ["aria-hidden", "true", 1, "fa", "fa-ghost", "text-danger", 2, "font-size", "150px"], [1, "h2", "mt-5", "mb-3", "text-danger", "font-weight-bold"], [1, "btn-group", "mt-5", "mx-auto", 2, "width", "20%"], ["type", "button", 1, "btn", "btn-block", "btn-outline-danger", "py-3", 3, "click"], [1, "fa-solid", "fa-arrow-left", "me-2"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_button_click_5_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "KGuB":
/*!*****************************************!*\
  !*** ./src/app/models/account.model.ts ***!
  \*****************************************/
/*! exports provided: AccountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModel", function() { return AccountModel; });
class AccountModel {
}


/***/ }),

/***/ "MXpY":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-modal/confirm-modal.component */ "TL7l");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/file-util */ "JzVJ");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config */ "Vx+w");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ContactsComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_ng_container_11_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const contact_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClicked(contact_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_ng_container_11_Template_button_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const contact_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onDeleted($event, contact_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getAvatar(contact_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getContactName(contact_r1));
} }
class ContactsComponent {
    constructor(ngbModal, router, toastService, cd, contactService) {
        this.ngbModal = ngbModal;
        this.router = router;
        this.toastService = toastService;
        this.cd = cd;
        this.contactService = contactService;
        this.contacts = [];
        this.filteredContacts = [];
    }
    ngOnInit() {
        this.contactsSubscription = this.contactService.contacts$.subscribe((contacts) => {
            this.contacts = contacts;
            this.filteredContacts = contacts;
            this.cd.detectChanges();
        });
        this.contactService.findContacts(src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].getCurrentUser().id).subscribe(() => { }, (error) => {
            this.toastService.show('Contacts loaded failed', false);
        });
    }
    ngOnDestroy() {
        this.contactsSubscription.unsubscribe();
    }
    onSearched(value) {
        if (value === null) {
            this.filteredContacts = this.contacts;
            return;
        }
        const foundContacts = this.contacts.filter(contact => {
            const lowercaseValue = value.toLowerCase();
            const CURRENT_USER = src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].getCurrentUser();
            const foundName = (contact.sender.id === CURRENT_USER.id) ? contact.receiver.name : contact.sender.name;
            return foundName.toLowerCase().includes(lowercaseValue);
        });
        this.filteredContacts = foundContacts;
    }
    getAvatar(contact) {
        const CURRENT_USER = src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].getCurrentUser();
        const user = (CURRENT_USER.id === contact.sender.id) ? contact.receiver : contact.sender;
        return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].getURL(user.avatarCode);
    }
    getContactName(contact) {
        const CURRENT_USER = src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].getCurrentUser();
        return (CURRENT_USER.id === contact.sender.id) ? contact.receiver.name : contact.sender.name;
    }
    onClicked(contact) {
        this.router.navigate(['/conversations', contact.conversationId]);
    }
    onDeleted(event, contact) {
        event.stopPropagation();
        const modalRef = this.ngbModal.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmModalComponent"], src_app_config__WEBPACK_IMPORTED_MODULE_4__["NGB_MODAL_BACKDROP_STATIC_OPTIONS"]);
        this.modalConfirmedSubscription = modalRef.componentInstance.onModalConfirmed()
            .subscribe(() => {
            this.contactService.deleteContact(contact.id).subscribe(() => {
                this.toastService.show('Contact deleted successfully', true);
            }, (errorRes) => {
                this.toastService.show(errorRes.error.message, false);
            });
            this.modalConfirmedSubscription.unsubscribe();
            modalRef.close();
        });
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_8__["ContactService"])); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 12, vars: 1, consts: [[1, "d-flex", "flex-column", "h-100"], [1, "d-flex", "align-items-center", "border-bottom", "ms-3", "py-2", "py-1"], [1, "fa-regular", "fa-address-book", "fa-2x", "me-3"], [1, "text-secondary", "my-auto", "font-weight-bold", "h4", "py-2"], [1, "d-flex", "align-items-center", "m-2"], [1, "input-group", "py-2"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "input"], [1, "border-bottom", "overflow-auto", "h-100", "w-100", "pe-3", "flex-grow-1"], [4, "ngFor", "ngForOf"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "list-group-item-action", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], ["alt", " ", "width", "50", "height", "50", 1, "rounded-circle", 3, "src"], [1, "ms-3", "w-100"], [1, "my-auto", "text-truncate", "font-weight-bold", "flex-grow-1"], [1, "d-flex", "justify-content-end", "align-items-center"], ["type", "button", 1, "btn", "btn-white", "btn-lg", 3, "click"], [1, "fa-solid", "fa-x", "fa-lg", "text-danger"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ContactsComponent_Template_input_input_9_listener($event) { return ctx.onSearched($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactsComponent_ng_container_11_Template, 12, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredContacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_8__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "NPJq":
/*!***************************************************************************!*\
  !*** ./src/app/components/contact-features/contact-features.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContactFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFeaturesComponent", function() { return ContactFeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config */ "Vx+w");
/* harmony import */ var _find_contact_modal_find_contact_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../find-contact-modal/find-contact-modal.component */ "AlA3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class ContactFeaturesComponent {
    constructor(ngbModal) {
        this.ngbModal = ngbModal;
    }
    onFindContactOpened() {
        this.ngbModal.open(_find_contact_modal_find_contact_modal_component__WEBPACK_IMPORTED_MODULE_2__["FindContactModelComponent"], src_app_config__WEBPACK_IMPORTED_MODULE_1__["NGB_MODAL_BACKDROP_STATIC_OPTIONS"]);
    }
}
ContactFeaturesComponent.ɵfac = function ContactFeaturesComponent_Factory(t) { return new (t || ContactFeaturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
ContactFeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFeaturesComponent, selectors: [["app-contact-features"]], decls: 24, vars: 0, consts: [[1, "row", "h-100"], [1, "col-md-4", "h-100", "pe-0", "border-end"], [1, "d-flex", "justify-content-between", "align-items-center", "px-2", "py-1", "border-bottom"], ["height", "50px", 1, "invisible"], ["type", "button", 1, "btn", "p-3", 3, "click"], [1, "fa-solid", "fa-user-plus", "text-secondary"], [1, "list-group", "overflow-auto"], ["routerLink", "/contactFeatures/contacts", "routerLinkActive", "selected", 1, "list-group-item", "list-group-item-action", "py-3"], [1, "d-flex", "align-items-center"], [1, "fa-regular", "fa-address-book", "fa-lg", "me-3"], ["routerLink", "/contactFeatures/receivedContactRequests", "routerLinkActive", "selected", 1, "list-group-item", "list-group-item-action", "py-3"], [1, "fa-regular", "fa-envelope", "fa-lg", "me-3"], ["routerLink", "/contactFeatures/sentContactRequests", "routerLinkActive", "selected", 1, "list-group-item", "list-group-item-action", "py-3"], [1, "fa-regular", "fa-paper-plane", "fa-lg", "me-3"], [1, "col-md-8", "h-100", "px-0", "bg-white"]], template: function ContactFeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactFeaturesComponent_Template_button_click_4_listener() { return ctx.onFindContactOpened(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Received contact requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sent contact requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1mZWF0dXJlcy9jb250YWN0LWZlYXR1cmVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-features',
                templateUrl: './contact-features.component.html',
                styleUrls: ['./contact-features.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "PZBJ":
/*!*********************************************************************!*\
  !*** ./src/app/components/conversations/conversations.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConversationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsComponent", function() { return ConversationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_profile_modal_user_profile_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-profile-modal/user-profile-modal.component */ "RihJ");
/* harmony import */ var _join_group_conversation_modal_join_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../join-group-conversation-modal/join-group-conversation-modal.component */ "4gNh");
/* harmony import */ var src_app_components_group_conversation_modal_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/group-conversation-modal/group-conversation-modal.component */ "t9Cg");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/file-util */ "JzVJ");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config */ "Vx+w");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/conversation.service */ "uTcX");
/* harmony import */ var _conversation_list_conversation_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../conversation-list/conversation-list.component */ "FZwn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");














class ConversationsComponent {
    constructor(ngbModal, userService, toastService, cd, conversationService) {
        this.ngbModal = ngbModal;
        this.userService = userService;
        this.toastService = toastService;
        this.cd = cd;
        this.conversationService = conversationService;
    }
    ngOnInit() {
        this.currentUser = src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"].getCurrentUser();
        this.currentUserSupscription = this.userService.$currentUser.subscribe((user) => {
            this.currentUser = user;
            src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"].setCurrentUser(this.currentUser);
            this.cd.detectChanges();
        });
        this.conversationService.clearCurrentConversation();
    }
    setAvatar() {
        this.currentUser.avatarCode = this.currentUser.avatarCode;
    }
    ngOnDestroy() {
        this.currentUserSupscription.unsubscribe();
    }
    getAvatar() {
        return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_5__["FileUtil"].getURL(this.currentUser.avatarCode);
    }
    onUserProfileModalOpened() {
        const modalRef = this.ngbModal.open(_user_profile_modal_user_profile_modal_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileModalComponent"], src_app_config__WEBPACK_IMPORTED_MODULE_6__["NGB_MODAL_BACKDROP_STATIC_OPTIONS"]);
        modalRef.componentInstance.user = this.currentUser;
    }
    onCopiedUserId() {
        navigator.clipboard.writeText(`${src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"].getCurrentUser().id}`);
        this.toastService.show('User ID copied', true);
    }
    onJoinGroupConversationModalOpened() {
        this.ngbModal.open(_join_group_conversation_modal_join_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_2__["JoinGroupConversationModalComponent"], src_app_config__WEBPACK_IMPORTED_MODULE_6__["NGB_MODAL_BACKDROP_STATIC_OPTIONS"]);
    }
    onCreateGroupConversationModalOpened() {
        const modalRef = this.ngbModal.open(src_app_components_group_conversation_modal_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_3__["GroupConversationModalComponent"], src_app_config__WEBPACK_IMPORTED_MODULE_6__["NGB_MODAL_BACKDROP_STATIC_OPTIONS"]);
        modalRef.componentInstance.isCreationMode = true;
    }
}
ConversationsComponent.ɵfac = function ConversationsComponent_Factory(t) { return new (t || ConversationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_10__["ConversationService"])); };
ConversationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConversationsComponent, selectors: [["app-conversations"]], decls: 20, vars: 1, consts: [[1, "row", "h-100"], [1, "col-4", "h-100", "pe-0", "border-end", "d-flex", "flex-column"], [1, "d-flex", "justify-content-between", "align-items-center", "px-2", "py-1", "border-bottom", "flex-grow-0"], ["alt", "Avatar", "width", "50px", "height", "50px", 1, "rounded-circle", 3, "src", "click"], [1, "d-flex"], ["type", "button", 1, "btn", "p-3", 3, "click"], [1, "fa-solid", "fa-comment-medical", "text-secondary"], [1, "fa-solid", "fa-person-circle-plus", "text-secondary"], [1, "btn-group"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "p-3"], [1, "fas", "fa-ellipsis-vertical", "text-secondary"], [1, "dropdown"], ["aria-labelledby", "conversationsEllipsisDropdown", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "click"], [1, "flex-grow-1"], [1, "col-8", "h-100", "px-3", "bg-white"]], template: function ConversationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConversationsComponent_Template_img_click_3_listener() { return ctx.onUserProfileModalOpened(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConversationsComponent_Template_button_click_5_listener() { return ctx.onCreateGroupConversationModalOpened(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConversationsComponent_Template_button_click_7_listener() { return ctx.onJoinGroupConversationModalOpened(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConversationsComponent_Template_button_click_14_listener() { return ctx.onCopiedUserId(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Copy user id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-conversation-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getAvatar(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_conversation_list_conversation_list_component__WEBPACK_IMPORTED_MODULE_11__["ConversationListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udmVyc2F0aW9ucy9jb252ZXJzYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConversationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-conversations',
                templateUrl: './conversations.component.html',
                styleUrls: ['./conversations.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_10__["ConversationService"] }]; }, null); })();


/***/ }),

/***/ "RihJ":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user-profile-modal/user-profile-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserProfileModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModalComponent", function() { return UserProfileModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user.model */ "Tj/N");
/* harmony import */ var src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/file-util */ "JzVJ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["avatarInput"];
const _c1 = ["avatarImage"];
const _c2 = ["name"];
function UserProfileModalComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 20);
} }
class UserProfileModalComponent {
    constructor(ngbActiveModal, toastService, userService) {
        this.ngbActiveModal = ngbActiveModal;
        this.toastService = toastService;
        this.userService = userService;
        this.newAvatarUrl = null;
        this.loading = false;
    }
    getAvatar() {
        return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].getURL(this.user.avatarCode);
    }
    onFileChanged(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const file = event.target.files[0];
            if (file) {
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    var _a;
                    this.newAvatarUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                };
                fileReader.readAsDataURL(file);
            }
        });
    }
    onFileChosen() {
        this.avatarInputRef.nativeElement.click();
    }
    onSaved() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const clonedUser = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"](this.user.id);
            clonedUser.name = this.nameRef.nativeElement.value;
            let avatar = null;
            if (this.avatarInputRef.nativeElement.files.length > 0) {
                avatar = this.avatarInputRef.nativeElement.files[0];
            }
            this.userService.save(clonedUser, avatar).subscribe(() => {
                this.toastService.show('User profile updated', true);
                this.onClosed();
            }, (errorRes) => {
                this.loading = false;
                this.errorMessage = errorRes.error.message;
            });
        });
    }
    onClosed() {
        this.ngbActiveModal.close();
    }
}
UserProfileModalComponent.ɵfac = function UserProfileModalComponent_Factory(t) { return new (t || UserProfileModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
UserProfileModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserProfileModalComponent, selectors: [["app-user-profile-modal"]], viewQuery: function UserProfileModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatarInputRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatarImageRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nameRef = _t.first);
    } }, inputs: { user: "user" }, decls: 26, vars: 6, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", "data-bs-dismiss", "modal", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-2", "d-flex", "justify-content-center", "position-relative"], [1, "avatar-wrapper"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change"], ["avatarInput", ""], ["width", "100", "height", "100", 1, "rounded-circle", "border", "border-secondary", 3, "src", "click"], ["avatarImage", ""], [1, "fa-solid", "fa-camera", "position-absolute", "top-50", "start-50", "translate-middle", "text-light", "d-none"], [1, "mb-2"], ["for", "nameInput", 1, "form-label"], ["ngbAutofocus", "", "id", "nameInput", "type", "text", 1, "form-control", 3, "value"], ["name", ""], [1, "text-danger"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function UserProfileModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserProfileModalComponent_Template_button_click_3_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UserProfileModalComponent_Template_input_change_7_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "img", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserProfileModalComponent_Template_img_click_9_listener() { return ctx.onFileChosen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserProfileModalComponent_Template_button_click_21_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserProfileModalComponent_Template_button_click_23_listener() { return ctx.onSaved(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UserProfileModalComponent_span_24_Template, 1, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.newAvatarUrl || ctx.getAvatar(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["i[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n}\r\n\r\n.avatar-wrapper[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    filter: brightness(80%);\r\n}\r\n\r\n.avatar-wrapper[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    display: block!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUtbW9kYWwvdXNlci1wcm9maWxlLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUtbW9kYWwvdXNlci1wcm9maWxlLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uYXZhdGFyLXdyYXBwZXI6aG92ZXIgaW1ne1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XHJcbn1cclxuXHJcbi5hdmF0YXItd3JhcHBlcjpob3ZlciBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProfileModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-profile-modal',
                templateUrl: './user-profile-modal.component.html',
                styleUrls: ['./user-profile-modal.component.css'],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], avatarInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['avatarInput']
        }], avatarImageRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['avatarImage']
        }], nameRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['name']
        }] }); })();


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
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toast/toast.component */ "COqc");




class AppComponent {
    constructor() {
        this.title = 'client-chat-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "bg-light", "container-fluid", "vh-100", "vw-100", "p-0", "m-0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-toast");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TL7l":
/*!*********************************************************************!*\
  !*** ./src/app/components/confirm-modal/confirm-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




class ConfirmModalComponent {
    constructor(ngbActiveModal) {
        this.ngbActiveModal = ngbActiveModal;
        this.modalOnConfirmedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    onModalConfirmed() {
        return this.modalOnConfirmedSubject.asObservable();
    }
    onConfirmed() {
        this.modalOnConfirmedSubject.next();
        this.onClosed();
    }
    onClosed() {
        this.ngbActiveModal.close();
    }
}
ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
ConfirmModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmModalComponent, selectors: [["app-confirm-modal"]], decls: 12, vars: 0, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_3_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure to perform this action?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_8_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_10_listener() { return ctx.onConfirmed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Confirm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-modal',
                templateUrl: './confirm-modal.component.html',
                styleUrls: ['./confirm-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "Tj/N":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
class UserModel {
    constructor(id) {
        this.id = id;
    }
}


/***/ }),

/***/ "UvuN":
/*!**********************************************!*\
  !*** ./src/app/models/text-message.model.ts ***!
  \**********************************************/
/*! exports provided: TextMessageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMessageModel", function() { return TextMessageModel; });
/* harmony import */ var _message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.model */ "4Em8");

class TextMessageModel extends _message_model__WEBPACK_IMPORTED_MODULE_0__["MessageModel"] {
    constructor() {
        super();
        this.instanceOf = "TEXT";
    }
}


/***/ }),

/***/ "Vx+w":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: API_BASE_URL, WEB_SOCKET_PUBLIC_ENDPOINT, WEB_SOCKET_PRIVATE_ENDPOINT, NGB_MODAL_BACKDROP_STATIC_OPTIONS, HEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB_SOCKET_PUBLIC_ENDPOINT", function() { return WEB_SOCKET_PUBLIC_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB_SOCKET_PRIVATE_ENDPOINT", function() { return WEB_SOCKET_PRIVATE_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGB_MODAL_BACKDROP_STATIC_OPTIONS", function() { return NGB_MODAL_BACKDROP_STATIC_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER", function() { return HEADER; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

// endpoint
const API_VERSION = 'v2';
const API_BASE_URL = `/api/${API_VERSION}`;
// websocket
const WEB_SOCKET_PUBLIC_ENDPOINT = `/public`;
const WEB_SOCKET_PRIVATE_ENDPOINT = `/private`;
// ng-bootstrap modal config 
const NGB_MODAL_BACKDROP_STATIC_OPTIONS = {
    backdrop: 'static',
    keyboard: false
};
// http config
const HEADER = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
    'Content-Type': 'application/json',
});


/***/ }),

/***/ "WnTk":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_account_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/account.model */ "KGuB");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SignInComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 10);
} }
class SignInComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.account = new src_app_models_account_model__WEBPACK_IMPORTED_MODULE_1__["AccountModel"]();
        this.loading = false;
    }
    signIn() {
        this.loading = true;
        this.authService.signIn(this.account)
            .subscribe((res) => {
            src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].setCurrentUser(res.data);
            this.router.navigate(['/conversations']);
        }, (error) => {
            this.loading = false;
            this.errorMessage = error.error.message;
        });
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-signin"]], decls: 16, vars: 5, consts: [[1, "text-center", "font-weight-bold", "p-5"], [1, "form-group", "my-3"], ["type", "text", "placeholder", "Enter phone number", "autofocus", "", 1, "form-control", "py-2", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Enter password", 1, "form-control", "py-2", 3, "ngModel", "ngModelChange"], [1, "text-danger"], ["type", "button", 1, "btn", "form-control", "btn-success", "py-2", "mt-3", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "text-center", "p-2", "mt-5"], [1, "small", "text-secondary"], ["routerLink", "/auth/signup"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_3_listener($event) { return ctx.account.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_5_listener($event) { return ctx.account.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_8_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignInComponent_span_9_Template, 1, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sign in\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign up now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.account.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.account.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin',
                templateUrl: './signin.component.html',
                styleUrls: ['./signin.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Y5y+":
/*!********************************************!*\
  !*** ./src/app/requests/signup.request.ts ***!
  \********************************************/
/*! exports provided: SignupRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRequest", function() { return SignupRequest; });
class SignupRequest {
}


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_conversations_conversations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/conversations/conversations.component */ "PZBJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_conversation_list_conversation_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/conversation-list/conversation-list.component */ "FZwn");
/* harmony import */ var _components_conversation_detail_conversation_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/conversation-detail/conversation-detail.component */ "97e/");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _directives_scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/scroll-to-bottom.directive */ "ooi6");
/* harmony import */ var _components_contact_features_contact_features_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact-features/contact-features.component */ "NPJq");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "MXpY");
/* harmony import */ var _components_received_contact_requests_received_contact_requests_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/received-contact-requests/received-contact-requests.component */ "5kOt");
/* harmony import */ var _components_sent_contact_requests_sent_contact_requests_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sent-contact-requests/sent-contact-requests.component */ "jLzO");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/auth/auth.component */ "qrmE");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/signin/signin.component */ "WnTk");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "JcAc");
/* harmony import */ var _components_user_profile_modal_user_profile_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user-profile-modal/user-profile-modal.component */ "RihJ");
/* harmony import */ var _components_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/change-password-modal/change-password-modal.component */ "2R26");
/* harmony import */ var _components_group_conversation_modal_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/group-conversation-modal/group-conversation-modal.component */ "t9Cg");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/confirm-modal/confirm-modal.component */ "TL7l");
/* harmony import */ var _components_join_group_conversation_modal_join_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/join-group-conversation-modal/join-group-conversation-modal.component */ "4gNh");
/* harmony import */ var _components_find_contact_modal_find_contact_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/find-contact-modal/find-contact-modal.component */ "AlA3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/toast/toast.component */ "COqc");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "MWWs");
/* harmony import */ var _services_stomp_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/stomp.service */ "tSxv");
/* harmony import */ var _components_view_modal_view_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/view-modal/view-modal.component */ "tDCq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/message/message.component */ "5j9j");
/* harmony import */ var _components_voice_recorder_modal_voice_recorder_modal_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/voice-recorder-modal/voice-recorder-modal.component */ "iWTV");
/* harmony import */ var _components_delete_account_modal_delete_account_modal_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/delete-account-modal/delete-account-modal.component */ "Ediw");








































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_31__["RxStompService"],
        _services_stomp_service__WEBPACK_IMPORTED_MODULE_32__["StompService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_34__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbToastModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
            ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__["NgxExtendedPdfViewerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
        _components_conversations_conversations_component__WEBPACK_IMPORTED_MODULE_6__["ConversationsComponent"],
        _components_conversation_list_conversation_list_component__WEBPACK_IMPORTED_MODULE_8__["ConversationListComponent"],
        _components_conversation_detail_conversation_detail_component__WEBPACK_IMPORTED_MODULE_9__["ConversationDetailComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
        _directives_scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_11__["ScrollToBottomDirective"],
        _components_contact_features_contact_features_component__WEBPACK_IMPORTED_MODULE_12__["ContactFeaturesComponent"],
        _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__["ContactsComponent"],
        _components_received_contact_requests_received_contact_requests_component__WEBPACK_IMPORTED_MODULE_14__["ReceivedContactRequestComponent"],
        _components_sent_contact_requests_sent_contact_requests_component__WEBPACK_IMPORTED_MODULE_15__["SentContactRequestComponent"],
        _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_16__["AuthComponent"],
        _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_17__["SignInComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_19__["MainComponent"],
        _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__["WelcomeComponent"],
        _components_user_profile_modal_user_profile_modal_component__WEBPACK_IMPORTED_MODULE_21__["UserProfileModalComponent"],
        _components_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordModalComponent"],
        _components_group_conversation_modal_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_23__["GroupConversationModalComponent"],
        _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmModalComponent"],
        _components_join_group_conversation_modal_join_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_26__["JoinGroupConversationModalComponent"],
        _components_find_contact_modal_find_contact_modal_component__WEBPACK_IMPORTED_MODULE_27__["FindContactModelComponent"],
        _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_30__["ToastComponent"],
        _components_view_modal_view_modal_component__WEBPACK_IMPORTED_MODULE_33__["ViewModalComponent"],
        _components_message_message_component__WEBPACK_IMPORTED_MODULE_35__["MessageComponent"],
        _components_voice_recorder_modal_voice_recorder_modal_component__WEBPACK_IMPORTED_MODULE_36__["VoiceRecorderModalComponent"],
        _components_delete_account_modal_delete_account_modal_component__WEBPACK_IMPORTED_MODULE_37__["DeleteAccountModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_34__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbToastModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__["NgxExtendedPdfViewerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                    _components_conversations_conversations_component__WEBPACK_IMPORTED_MODULE_6__["ConversationsComponent"],
                    _components_conversation_list_conversation_list_component__WEBPACK_IMPORTED_MODULE_8__["ConversationListComponent"],
                    _components_conversation_detail_conversation_detail_component__WEBPACK_IMPORTED_MODULE_9__["ConversationDetailComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                    _directives_scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_11__["ScrollToBottomDirective"],
                    _components_contact_features_contact_features_component__WEBPACK_IMPORTED_MODULE_12__["ContactFeaturesComponent"],
                    _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__["ContactsComponent"],
                    _components_received_contact_requests_received_contact_requests_component__WEBPACK_IMPORTED_MODULE_14__["ReceivedContactRequestComponent"],
                    _components_sent_contact_requests_sent_contact_requests_component__WEBPACK_IMPORTED_MODULE_15__["SentContactRequestComponent"],
                    _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_16__["AuthComponent"],
                    _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_17__["SignInComponent"],
                    _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_19__["MainComponent"],
                    _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__["WelcomeComponent"],
                    _components_user_profile_modal_user_profile_modal_component__WEBPACK_IMPORTED_MODULE_21__["UserProfileModalComponent"],
                    _components_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordModalComponent"],
                    _components_group_conversation_modal_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_23__["GroupConversationModalComponent"],
                    _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmModalComponent"],
                    _components_join_group_conversation_modal_join_group_conversation_modal_component__WEBPACK_IMPORTED_MODULE_26__["JoinGroupConversationModalComponent"],
                    _components_find_contact_modal_find_contact_modal_component__WEBPACK_IMPORTED_MODULE_27__["FindContactModelComponent"],
                    _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_30__["ToastComponent"],
                    _components_view_modal_view_modal_component__WEBPACK_IMPORTED_MODULE_33__["ViewModalComponent"],
                    _components_message_message_component__WEBPACK_IMPORTED_MODULE_35__["MessageComponent"],
                    _components_voice_recorder_modal_voice_recorder_modal_component__WEBPACK_IMPORTED_MODULE_36__["VoiceRecorderModalComponent"],
                    _components_delete_account_modal_delete_account_modal_component__WEBPACK_IMPORTED_MODULE_37__["DeleteAccountModalComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_34__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbToastModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
                    ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__["NgxExtendedPdfViewerModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [
                    _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_31__["RxStompService"],
                    _services_stomp_service__WEBPACK_IMPORTED_MODULE_32__["StompService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dQgq":
/*!******************************************!*\
  !*** ./src/app/utils/observable.util.ts ***!
  \******************************************/
/*! exports provided: ObservableUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableUtil", function() { return ObservableUtil; });
class ObservableUtil {
    static notify(subject, data) {
        let nextedData;
        if (data instanceof Map) {
            nextedData = Array.from(data.values());
        }
        else {
            nextedData = data;
        }
        subject.next(nextedData);
    }
}


/***/ }),

/***/ "iWTV":
/*!***********************************************************************************!*\
  !*** ./src/app/components/voice-recorder-modal/voice-recorder-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VoiceRecorderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceRecorderModalComponent", function() { return VoiceRecorderModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_multimedia_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/multimedia-message.model */ "5lUJ");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user.model */ "Tj/N");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_voice_recorder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/voice-recorder.service */ "xqy/");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/conversation.service */ "uTcX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = ["audioPlayer"];
const _c1 = function (a0) { return { "recording": a0 }; };
class VoiceRecorderModalComponent {
    constructor(ngbActiveModal, voiceRecorderService, toastService, conversationService) {
        this.ngbActiveModal = ngbActiveModal;
        this.voiceRecorderService = voiceRecorderService;
        this.toastService = toastService;
        this.conversationService = conversationService;
        this.isRecording = false;
    }
    onClosed() {
        this.ngbActiveModal.close();
    }
    onToggled() {
        if (!this.isRecording) {
            this.onStarted();
        }
        else {
            this.onStopped();
        }
    }
    onStarted() {
        this.voiceRecorderService.startRecording();
        this.isRecording = true;
    }
    onStopped() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audioBob = yield this.voiceRecorderService.stopRecording();
            this.isRecording = false;
            this.audioPlayer.nativeElement.src = URL.createObjectURL(this.audioBob);
        });
    }
    onSent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const message = new src_app_models_multimedia_message_model__WEBPACK_IMPORTED_MODULE_2__["MultimediaMessageModel"]();
            message.sender = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"](src_app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"].getCurrentUser().id);
            message.sentAt = new Date().toISOString();
            message.conversationId = this.conversationService.currentConversation.id;
            message.fileType = 'AUDIO';
            const file = new File([this.audioBob], 'audio.mp3', { type: 'audio/mp3' });
            this.conversationService.sendMultimediaMessage(message, file).subscribe((res) => {
                this.ngbActiveModal.close(res);
                this.onClosed();
            }, (error) => this.toastService.show(error.error.message, false));
        });
    }
}
VoiceRecorderModalComponent.ɵfac = function VoiceRecorderModalComponent_Factory(t) { return new (t || VoiceRecorderModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_voice_recorder_service__WEBPACK_IMPORTED_MODULE_6__["VoiceRecorderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_8__["ConversationService"])); };
VoiceRecorderModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VoiceRecorderModalComponent, selectors: [["app-voice-recorder-modal"]], viewQuery: function VoiceRecorderModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.audioPlayer = _t.first);
    } }, decls: 14, vars: 3, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", "data-bs-dismiss", "modal", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "fa", "fa-microphone", "fa-8x", "text-secondary", 3, "ngClass", "click"], ["controls", "", "autoplay", "", 1, "mt-3"], ["audioPlayer", ""], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function VoiceRecorderModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Voice recorder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VoiceRecorderModalComponent_Template_button_click_3_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VoiceRecorderModalComponent_Template_i_click_6_listener() { return ctx.onToggled(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "audio", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VoiceRecorderModalComponent_Template_button_click_10_listener() { return ctx.onSent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VoiceRecorderModalComponent_Template_button_click_12_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, ctx.isRecording));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], styles: ["@keyframes soundWave {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n    50% {\r\n        transform: scale(1.2);\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n.recording[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    animation: soundWave 1s infinite;\r\n    color: red!important;\r\n    transition: color 0.3s ease-in-out; \r\n}\r\n\r\n.recording[_ngcontent-%COMP%]:hover {\r\n    color: darkred!important; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92b2ljZS1yZWNvcmRlci1tb2RhbC92b2ljZS1yZWNvcmRlci1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixrQ0FBa0MsRUFBRSxrQ0FBa0M7QUFDMUU7O0FBRUE7SUFDSSx3QkFBd0IsRUFBRSw4QkFBOEI7QUFDNUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZvaWNlLXJlY29yZGVyLW1vZGFsL3ZvaWNlLXJlY29yZGVyLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNvdW5kV2F2ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG5cclxuLnJlY29yZGluZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbmltYXRpb246IHNvdW5kV2F2ZSAxcyBpbmZpbml0ZTtcclxuICAgIGNvbG9yOiByZWQhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDsgLyogQWRkIGEgc21vb3RoIGNvbG9yIHRyYW5zaXRpb24gKi9cclxufVxyXG5cclxuLnJlY29yZGluZzpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya3JlZCFpbXBvcnRhbnQ7IC8qIENoYW5nZSB0aGUgY29sb3Igb24gaG92ZXIgKi9cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VoiceRecorderModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-voice-recorder-modal',
                templateUrl: './voice-recorder-modal.component.html',
                styleUrls: ['./voice-recorder-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }, { type: src_app_services_voice_recorder_service__WEBPACK_IMPORTED_MODULE_6__["VoiceRecorderService"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }, { type: src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_8__["ConversationService"] }]; }, { audioPlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['audioPlayer']
        }] }); })();


/***/ }),

/***/ "jLzO":
/*!*************************************************************************************!*\
  !*** ./src/app/components/sent-contact-requests/sent-contact-requests.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SentContactRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentContactRequestComponent", function() { return SentContactRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/file-util */ "JzVJ");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-modal/confirm-modal.component */ "TL7l");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function SentContactRequestComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SentContactRequestComponent_div_12_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const sentContactRequest_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onDeleted(sentContactRequest_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sentContactRequest_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getAvatar(sentContactRequest_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sentContactRequest_r1.receiver.name);
} }
class SentContactRequestComponent {
    constructor(ngbModal, toastService, cd, contactService) {
        this.ngbModal = ngbModal;
        this.toastService = toastService;
        this.cd = cd;
        this.contactService = contactService;
        this.sentContactRequests = [];
        this.filteredSentContactRequests = [];
    }
    ngOnInit() {
        this.sentContactRequestsSubscription = this.contactService.sentContactRequests$.subscribe((sentContactRequests) => {
            this.sentContactRequests = sentContactRequests;
            this.filteredSentContactRequests = this.sentContactRequests;
            this.cd.detectChanges();
        });
        this.contactService.findSentContactRequests(src_app_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"].getCurrentUser().id).subscribe(() => { }, (error) => this.toastService.show('Sent contacts loaded failed', false));
    }
    ngOnDestroy() {
        this.sentContactRequestsSubscription.unsubscribe();
    }
    getAvatar(contact) {
        return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_2__["FileUtil"].getURL(contact.receiver.avatarCode);
    }
    onSearched(value) {
        if (value === null) {
            this.filteredSentContactRequests = this.sentContactRequests;
            return;
        }
        const foundSentContactRequests = this.sentContactRequests.filter(contact => {
            return contact.receiver.name.toLowerCase().includes(value.toLowerCase());
        });
        this.filteredSentContactRequests = foundSentContactRequests;
    }
    onDeleted(sentContactRequest) {
        const modalRef = this.ngbModal.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"]);
        this.modalConfirmedSubscription = modalRef.componentInstance.onModalConfirmed()
            .subscribe(() => {
            this.contactService.deleteSentRequest(sentContactRequest.id).subscribe(() => {
                this.toastService.show('Contact request deleted', true);
            }, (errorRes) => {
                this.toastService.show(errorRes.error.message, false);
            });
            this.modalConfirmedSubscription.unsubscribe();
            modalRef.close();
        });
    }
}
SentContactRequestComponent.ɵfac = function SentContactRequestComponent_Factory(t) { return new (t || SentContactRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"])); };
SentContactRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SentContactRequestComponent, selectors: [["app-sent-contact-requests"]], decls: 13, vars: 1, consts: [[1, "d-flex", "flex-column", "h-100"], [1, "d-flex", "align-items-center", "border-bottom", "ms-3", "py-2", "py-1"], [1, "fa-regular", "fa-paper-plane", "fa-2x", "me-3"], [1, "text-secondary", "my-auto", "font-weight-bold", "h4", "py-2"], [1, "d-flex", "align-items-center", "m-2"], [1, "input-group", "py-2"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "input"], [1, "border-bottom", "overflow-auto", "h-100", "w-100", "pe-3", "flex-grow-1"], [1, "list-group", "list-group-flush"], ["class", "list-group-item list-group-item-action", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], ["alt", " ", "width", "50", "height", "50", 1, "rounded-circle", 3, "src"], [1, "ms-3", "w-100"], [1, "my-auto", "text-truncate", "font-weight-bold", "flex-grow-1"], [1, "d-flex", "justify-content-end", "align-items-center"], ["type", "button", 1, "btn", "btn-white", 3, "click"], [1, "fa-solid", "fa-x", "fa-lg", "text-danger"]], template: function SentContactRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sent contact requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SentContactRequestComponent_Template_input_input_9_listener($event) { return ctx.onSearched($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SentContactRequestComponent_div_12_Template, 10, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredSentContactRequests);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VudC1jb250YWN0LXJlcXVlc3RzL3NlbnQtY29udGFjdC1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SentContactRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sent-contact-requests',
                templateUrl: './sent-contact-requests.component.html',
                styleUrls: ['./sent-contact-requests.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ "IfdK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AuthService {
    constructor(http) {
        this.http = http;
        this.SIGN_IN_URL = `${_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"]}/signin`;
        this.SIGN_UP_URL = `${_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"]}/signup`;
        this.ACCOUNT_BASE_URL = `${_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"]}/accounts`;
    }
    signIn(account) {
        return this.http.post(this.SIGN_IN_URL, account);
    }
    signUp(request) {
        return this.http.post(this.SIGN_UP_URL, request);
    }
    changePassword(request) {
        return this.http.patch(this.ACCOUNT_BASE_URL, request);
    }
    signOut() {
        _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].setCurrentUser(null);
    }
    deleteAccount(deleteAccountRequest) {
        const options = {
            headers: { 'Content-Type': 'application/json' },
            body: deleteAccountRequest
        };
        return this.http.delete(this.ACCOUNT_BASE_URL, options);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ooi6":
/*!**********************************************************!*\
  !*** ./src/app/directives/scroll-to-bottom.directive.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToBottomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToBottomDirective", function() { return ScrollToBottomDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollToBottomDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        // const nativeElement = this.el.nativeElement;
        // const isAtBottom = nativeElement.scrollHeight - nativeElement.scrollTop === nativeElement.clientHeight;
        // console.log(nativeElement.scrollHeight);
        // console.log(isAtBottom);
        // if (isAtBottom) {
        //   this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
        // }
    }
}
ScrollToBottomDirective.ɵfac = function ScrollToBottomDirective_Factory(t) { return new (t || ScrollToBottomDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScrollToBottomDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollToBottomDirective, selectors: [["", "scrollToBottom", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollToBottomDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[scrollToBottom]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "IfdK");
/* harmony import */ var _utils_observable_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/observable.util */ "dQgq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _file_fetcher_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-fetcher.service */ "sXZo");









class UserService {
    constructor(http, fileFetcherService) {
        this.http = http;
        this.fileFetcherService = fileFetcherService;
        this.USER_BASE_URL = `${_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"]}/users`;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$currentUser = this.currentUserSubject.asObservable();
        this.currentUser = _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"].getCurrentUser();
    }
    findOne(id) {
        return this.http.get(`${this.USER_BASE_URL}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((res) => {
            this.currentUser = res.data;
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_5__["ObservableUtil"].notify(this.currentUserSubject, this.currentUser);
        }));
    }
    save(user, avatar) {
        const formData = new FormData();
        formData.append('user', new Blob([JSON
                .stringify(user)], {
            type: 'application/json'
        }));
        if (avatar) {
            formData.append('avatar', avatar);
        }
        return this.http.patch(this.USER_BASE_URL, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((res) => {
            console.log(res);
            this.currentUser.name = user.name;
            this.currentUser.avatarCode = res.data;
            console.log(this.currentUser);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_5__["ObservableUtil"].notify(this.currentUserSubject, this.currentUser);
        }));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_file_fetcher_service__WEBPACK_IMPORTED_MODULE_7__["FileFetcherService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _file_fetcher_service__WEBPACK_IMPORTED_MODULE_7__["FileFetcherService"] }]; }, null); })();


/***/ }),

/***/ "qrmE":
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthComponent {
    constructor() { }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 3, vars: 0, consts: [[1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "col-md-4", "shadow", "bg-white", "py-3", "px-5"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sXZo":
/*!**************************************************!*\
  !*** ./src/app/services/file-fetcher.service.ts ***!
  \**************************************************/
/*! exports provided: FileFetcherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFetcherService", function() { return FileFetcherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class FileFetcherService {
    constructor(http) {
        this.http = http;
        this.FILE_INLINE_BASE_URL = `${_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"]}/files/inline`;
        this.FILE_ATTACHMENT_BASE_URL = `${_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"]}/files/attachment`;
    }
    fetchAsBytes(fileCode) {
        const url = `${this.FILE_ATTACHMENT_BASE_URL}/${fileCode}`;
        return this.http.get(url, { responseType: 'arraybuffer' });
    }
}
FileFetcherService.ɵfac = function FileFetcherService_Factory(t) { return new (t || FileFetcherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FileFetcherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileFetcherService, factory: FileFetcherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileFetcherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "t9Cg":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/group-conversation-modal/group-conversation-modal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: GroupConversationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupConversationModalComponent", function() { return GroupConversationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/file-util */ "JzVJ");
/* harmony import */ var src_app_models_group_conversation_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/group-conversation.model */ "1cIR");
/* harmony import */ var src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/conversation.model */ "JkB0");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/conversation.service */ "uTcX");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = ["avatarInput"];
const _c1 = ["avatarImage"];
const _c2 = ["nameInput"];
function GroupConversationModalComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 20);
} }
class GroupConversationModalComponent {
    constructor(ngbActiveModal, conversationService, cd, toastService) {
        this.ngbActiveModal = ngbActiveModal;
        this.conversationService = conversationService;
        this.cd = cd;
        this.toastService = toastService;
        this.conversation = new src_app_models_group_conversation_model__WEBPACK_IMPORTED_MODULE_4__["GroupConversationModel"]();
        this.loading = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (!this.isCreationMode) {
            this.title = "Update group conversation";
            this.conversation = this.conversationService.currentConversation;
            this.avatarImage.nativeElement.src = src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].getURL(this.conversation.avatarCode);
            this.cd.detectChanges();
            return;
        }
        this.title = "Create group conversation";
        this.cd.detectChanges();
    }
    getName() {
        return src_app_models_conversation_model__WEBPACK_IMPORTED_MODULE_5__["ConversationModel"].getName(this.conversation);
    }
    onFileChanged(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const file = event.target.files[0];
            if (file) {
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    var _a;
                    this.avatarImage.nativeElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                    this.cd.detectChanges();
                };
                fileReader.readAsDataURL(file);
            }
        });
    }
    onFileChosen() {
        this.avatarInput.nativeElement.click();
    }
    onSaved() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const clonedConversation = new src_app_models_group_conversation_model__WEBPACK_IMPORTED_MODULE_4__["GroupConversationModel"]();
            clonedConversation.name = this.nameInput.nativeElement.value;
            let avatar;
            if (this.avatarInput.nativeElement.files.length > 0) {
                avatar = this.avatarInput.nativeElement.files[0];
            }
            if (this.isCreationMode) {
                this.onCreated(clonedConversation, avatar);
                return;
            }
            clonedConversation.id = this.conversation.id;
            this.onUpdated(clonedConversation, avatar);
        });
    }
    onCreated(clonedConversation, avatar) {
        const CURRENT_USER = src_app_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].getCurrentUser();
        clonedConversation.ownerId = CURRENT_USER.id;
        this.conversationService.createGroupConversation(clonedConversation, avatar).subscribe(() => {
            this.toastService.show('Group conversation created', true);
            this.onClosed();
        }, (errorResponse) => {
            this.loading = false;
            this.errorMessage = errorResponse.error.message;
            this.cd.detectChanges();
        });
    }
    onUpdated(clonedConversation, file) {
        this.conversationService.updateGroupConversation(clonedConversation, file).subscribe(() => {
            this.toastService.show('Group conversation updated', true);
            this.onClosed();
        }, (errorResponse) => {
            this.loading = false;
            this.errorMessage = errorResponse.error.message;
            this.cd.detectChanges();
        });
    }
    onClosed() {
        this.ngbActiveModal.close();
    }
}
GroupConversationModalComponent.ɵfac = function GroupConversationModalComponent_Factory(t) { return new (t || GroupConversationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_7__["ConversationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"])); };
GroupConversationModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupConversationModalComponent, selectors: [["app-group-conversation-modal"]], viewQuery: function GroupConversationModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatarInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatarImage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nameInput = _t.first);
    } }, inputs: { isCreationMode: "isCreationMode" }, decls: 26, vars: 5, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", "data-bs-dismiss", "modal", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "position-relative", "d-flex", "justify-content-center"], [1, "avatar-wrapper"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change"], ["avatarInput", ""], ["width", "100", "height", "100", 1, "rounded-circle", "border", "border-secondary", 3, "click"], ["avatarImage", ""], [1, "fa-solid", "fa-camera", "position-absolute", "top-50", "start-50", "translate-middle", "text-light", "d-none"], [1, "mb-2"], ["for", "nameInput", 1, "form-label"], ["ngbAutofocus", "", "id", "nameInput", "type", "text", "placeholder", "Type a conversation name", 1, "form-control", 3, "value"], ["nameInput", ""], [1, "text-danger"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"]], template: function GroupConversationModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupConversationModalComponent_Template_button_click_3_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function GroupConversationModalComponent_Template_input_change_7_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "img", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupConversationModalComponent_Template_img_click_9_listener() { return ctx.onFileChosen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupConversationModalComponent_Template_button_click_21_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupConversationModalComponent_Template_button_click_23_listener() { return ctx.onSaved(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, GroupConversationModalComponent_span_24_Template, 1, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.getName());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["i[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n}\r\n\r\n.avatar-wrapper[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    filter: brightness(80%);\r\n}\r\n\r\n.avatar-wrapper[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    display: block!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncm91cC1jb252ZXJzYXRpb24tbW9kYWwvZ3JvdXAtY29udmVyc2F0aW9uLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncm91cC1jb252ZXJzYXRpb24tbW9kYWwvZ3JvdXAtY29udmVyc2F0aW9uLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uYXZhdGFyLXdyYXBwZXI6aG92ZXIgaW1ne1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XHJcbn1cclxuXHJcbi5hdmF0YXItd3JhcHBlcjpob3ZlciBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GroupConversationModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-group-conversation-modal',
                templateUrl: './group-conversation-modal.component.html',
                styleUrls: ['./group-conversation-modal.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] }, { type: src_app_services_conversation_service__WEBPACK_IMPORTED_MODULE_7__["ConversationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] }]; }, { isCreationMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], avatarInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['avatarInput']
        }], avatarImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['avatarImage']
        }], nameInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['nameInput']
        }] }); })();


/***/ }),

/***/ "tDCq":
/*!***************************************************************!*\
  !*** ./src/app/components/view-modal/view-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: ViewModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModalComponent", function() { return ViewModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/file-util */ "JzVJ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_file_fetcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/file-fetcher.service */ "sXZo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");







function ViewModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fileContent);
} }
function ViewModalComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-extended-pdf-viewer", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getData());
} }
class ViewModalComponent {
    constructor(ngbActiveModal, cd, fileFetcherService) {
        this.ngbActiveModal = ngbActiveModal;
        this.cd = cd;
        this.fileFetcherService = fileFetcherService;
    }
    ngOnInit() {
        if (this.message.fileType !== 'OTHER') {
            return;
        }
        this.fileFetcherService.fetchAsBytes(this.message.fileCode)
            .subscribe((data) => {
            const decoder = new TextDecoder('utf-8');
            this.fileContent = decoder.decode(data);
            this.cd.detectChanges();
        });
    }
    onClosed() {
        this.ngbActiveModal.close();
    }
    getData() {
        return src_app_utils_file_util__WEBPACK_IMPORTED_MODULE_1__["FileUtil"].getAttachment(this.message.fileCode);
    }
}
ViewModalComponent.ɵfac = function ViewModalComponent_Factory(t) { return new (t || ViewModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_file_fetcher_service__WEBPACK_IMPORTED_MODULE_3__["FileFetcherService"])); };
ViewModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewModalComponent, selectors: [["app-view-modal"]], inputs: { message: "message" }, decls: 11, vars: 3, consts: [[1, "d-flex", "flex-column", "vh-100"], [1, "modal-header", "flex-grow-0"], [1, "modal-title"], ["type", "button", "aria-label", "Close", "data-bs-dismiss", "modal", 1, "btn-close", 3, "click"], [1, "modal-body", "flex-grow-1"], [4, "ngIf"], [1, "modal-footer", "flex-grow-0"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [3, "src"]], template: function ViewModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewModalComponent_Template_button_click_4_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewModalComponent_ng_container_6_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewModalComponent_ng_container_7_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewModalComponent_Template_button_click_9_listener() { return ctx.onClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.fileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.fileType === "OTHER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.fileType === "PDF");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__["NgxExtendedPdfViewerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1tb2RhbC92aWV3LW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-modal',
                templateUrl: './view-modal.component.html',
                styleUrls: ['./view-modal.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_services_file_fetcher_service__WEBPACK_IMPORTED_MODULE_3__["FileFetcherService"] }]; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "tSxv":
/*!*******************************************!*\
  !*** ./src/app/services/stomp.service.ts ***!
  \*******************************************/
/*! exports provided: StompService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StompService", function() { return StompService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "MWWs");



const myRxStompConfig = {
    brokerURL: 'ws://localhost:8080/ws',
    connectHeaders: {},
    splitLargeFrames: true,
    heartbeatIncoming: 0,
    heartbeatOutgoing: 20000,
    reconnectDelay: 5000,
    debug: (msg) => {
        console.log(new Date(), msg);
    }
};
class StompService {
    constructor(rxStompService) {
        this.rxStompService = rxStompService;
    }
    connect() {
        this.rxStompService.configure(myRxStompConfig);
        this.rxStompService.activate();
        this.stompSubscriptions = new Map();
    }
    onConnected() {
        return this.rxStompService.connected$;
    }
    disconnect() {
        this.rxStompService.deactivate();
    }
    watch(destination, callback) {
        if (!this.stompSubscriptions.has(destination)) {
            const subscription = this.rxStompService.watch(destination).subscribe((res) => {
                callback(JSON.parse(res.body));
            });
            this.stompSubscriptions.set(destination, subscription);
        }
    }
    unwatch(destination, callback) {
        if (this.stompSubscriptions.has(destination)) {
            const subscription = this.stompSubscriptions.get(destination);
            if (subscription) {
                subscription.unsubscribe();
                this.stompSubscriptions.delete(destination);
                callback();
            }
        }
    }
    publish(topic, body) {
        const message = { destination: topic };
        if (body !== undefined) {
            message['body'] = JSON.stringify(body);
        }
        this.rxStompService.publish(message);
    }
}
StompService.ɵfac = function StompService_Factory(t) { return new (t || StompService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_1__["RxStompService"])); };
StompService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StompService, factory: StompService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StompService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_1__["RxStompService"] }]; }, null); })();


/***/ }),

/***/ "uTcX":
/*!**************************************************!*\
  !*** ./src/app/services/conversation.service.ts ***!
  \**************************************************/
/*! exports provided: ConversationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationService", function() { return ConversationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "Vx+w");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session.service */ "IfdK");
/* harmony import */ var _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/observable.util */ "dQgq");
/* harmony import */ var _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/toast/toast.service */ "21mK");
/* harmony import */ var _file_fetcher_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file-fetcher.service */ "sXZo");
/* harmony import */ var _stomp_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stomp.service */ "tSxv");












class ConversationService {
    constructor(http, toastService, fileFetcherService, stompService) {
        this.http = http;
        this.toastService = toastService;
        this.fileFetcherService = fileFetcherService;
        this.stompService = stompService;
        this.CONVERSATIONS_BASE_URL = `${_config__WEBPACK_IMPORTED_MODULE_4__["API_BASE_URL"]}/conversations`;
        this.GROUP_CONVERSATION_BASE_URL = `${_config__WEBPACK_IMPORTED_MODULE_4__["API_BASE_URL"]}/groupConversations`;
        this.MESSAGE_READ_STATUS_BASE_URL = `${_config__WEBPACK_IMPORTED_MODULE_4__["API_BASE_URL"]}/messageNotifications`;
        this.MULTIMEDIA_MESSAGE_BASE_URL = `${_config__WEBPACK_IMPORTED_MODULE_4__["API_BASE_URL"]}/multimediaMessages`;
        this.conversationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.conversations$ = this.conversationsSubject.asObservable();
        this.currentConversationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.curentConversation$ = this.currentConversationSubject.asObservable();
        this.messageReadStatusesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messageReadStatuses$ = this.messageReadStatusesSubject.asObservable();
        this.newMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newMessage$ = this.newMessageSubject.asObservable();
        this.fileUploadedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.fileUploaded$ = this.fileUploadedSubject.asObservable();
        this.conversations = [];
        this.messageReadStatuses = new Map();
    }
    clearCurrentConversation() {
        this.currentConversation = undefined;
        this.currentConversationSubject.next(this.currentConversation);
    }
    findAll(participantId) {
        const url = `${this.CONVERSATIONS_BASE_URL}/participants/${participantId}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.conversations = res.data;
            this.conversations.forEach(con => {
                this.subsribeConversationChannel(con.id);
            });
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.conversationsSubject, this.conversations);
        }));
    }
    findOne(conversationId, participantId) {
        const url = `${this.CONVERSATIONS_BASE_URL}/${conversationId}/participants/${participantId}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.currentConversation = res.data;
            this.subsribeConversationChannel(this.currentConversation.id);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.currentConversationSubject, this.currentConversation);
        }));
    }
    findUnreadMessages(conversationId) {
        const url = `${this.MESSAGE_READ_STATUS_BASE_URL}/conversations/${conversationId}/unreadMessages/user/${_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"].getCurrentUser().id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            const messageReadStatuses = res.data;
            this.messageReadStatuses = new Map(messageReadStatuses.map(status => [status.messageId, status]));
            this.messageReadStatusesSubject.next(this.messageReadStatuses);
        }));
    }
    createGroupConversation(conversation, avatar) {
        const formData = new FormData();
        formData.append('conversation', new Blob([JSON.stringify(conversation)], { type: 'application/json' }));
        if (avatar) {
            formData.append('avatar', avatar);
        }
        return this.http.post(this.GROUP_CONVERSATION_BASE_URL, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.conversations.push(res.data);
            this.subsribeConversationChannel(res.data.id);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.conversationsSubject, this.conversations);
        }));
    }
    updateGroupConversation(conversation, avatar) {
        const formData = new FormData();
        if (avatar) {
            formData.append('avatar', avatar);
        }
        formData.append('conversation', new Blob([JSON.stringify(conversation)], { type: 'application/json' }));
        return this.http.patch(this.GROUP_CONVERSATION_BASE_URL, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            const foundConversationIndex = this.conversations.findIndex(con => con.id === conversation.id);
            const foundConversation = this.conversations[foundConversationIndex];
            foundConversation.name = conversation.name;
            foundConversation.avatarCode = res.data;
            this.conversations[foundConversationIndex] = foundConversation;
            this.currentConversation.name = conversation.name;
            this.currentConversation.avatarCode = res.data;
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.conversationsSubject, this.conversations);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.currentConversationSubject, this.currentConversation);
        }));
    }
    joinGroupConversation(conversationId, joinerId) {
        const URL = `${this.GROUP_CONVERSATION_BASE_URL}/${conversationId}/participants/${joinerId}`;
        return this.http.post(URL, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            const joinedConversation = res.data;
            this.conversations.push(joinedConversation);
            this.subsribeConversationChannel(joinedConversation.id);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.conversationsSubject, this.conversations);
        }));
    }
    leaveGroupConversation(conversationId, leaverId) {
        const URL = `${this.GROUP_CONVERSATION_BASE_URL}/${conversationId}/participants/${leaverId}`;
        return this.http.delete(URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.conversations.splice(this.conversations.findIndex(con => con.id === conversationId), 1);
            this.currentConversation = undefined;
            this.unsubscribeConversationChannel(conversationId);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.conversationsSubject, this.conversations);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.currentConversationSubject, this.currentConversation);
        }));
    }
    markConversationAsRead(conversationId) {
        const topic = `/app/user/${_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"].getCurrentUser().id}/conversationReadStatus/${conversationId}`;
        this.stompService.publish(topic);
    }
    subsribeConversationChannel(conversationId) {
        const url = `${_config__WEBPACK_IMPORTED_MODULE_4__["WEB_SOCKET_PUBLIC_ENDPOINT"]}/conversations/${conversationId}/messages`;
        this.stompService.watch(url, (res) => {
            if (!res.success) {
                this.toastService.show(res.message, false);
                return;
            }
            const receivedMessage = res.data;
            if (receivedMessage.sender.id === _session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"].getCurrentUser().id) {
                this.currentConversation.messages[0] = receivedMessage;
                this.currentConversation.lastestMessage = receivedMessage;
                const foundConversationIndex = this.conversations.indexOf(this.conversations.find(con => con.id === receivedMessage.conversationId));
                const foundConversation = this.conversations[foundConversationIndex];
                this.conversations.splice(foundConversationIndex, 1);
                this.conversations.unshift(foundConversation);
                _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.currentConversationSubject, this.currentConversation);
                _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.fileUploadedSubject, 100);
                return;
            }
            const foundConversationIndex = this.conversations.indexOf(this.conversations.find(con => con.id === receivedMessage.conversationId));
            const foundConversation = this.conversations[foundConversationIndex];
            if (!foundConversation.messages) {
                foundConversation.messages = [];
            }
            foundConversation.messages.unshift(receivedMessage);
            foundConversation.lastestMessage = receivedMessage;
            this.conversations.splice(foundConversationIndex, 1);
            this.conversations.unshift(foundConversation);
            // If the message is sent to the current conversation 
            if (this.currentConversation && this.currentConversation.id === foundConversation.id) {
                this.currentConversation.messages.unshift(receivedMessage);
                this.currentConversation.lastestMessage = receivedMessage;
                this.markConversationAsRead(receivedMessage.conversationId);
            }
            else {
                this.conversations[0].hasNewMessage = true;
                _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.conversationsSubject, this.conversations);
            }
        });
    }
    sendTextMessage(message) {
        this.currentConversation.messages.unshift(message);
        this.currentConversation.lastestMessage = message;
        const destination = `/app/conversations/${message.conversationId}/textMessages`;
        this.stompService.publish(destination, message);
    }
    sendMultimediaMessage(message, file) {
        if (file.size > 1024 * 1024 * 300) {
            this.toastService.show('File size must lest than 300MB', false);
            return;
        }
        this.currentConversation.messages.unshift(message);
        this.currentConversation.lastestMessage = message;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('message', new Blob([JSON
                .stringify(message)], {
            type: 'application/json'
        }));
        return this.http.post(this.MULTIMEDIA_MESSAGE_BASE_URL, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
                const progress = Math.round((100 * event.loaded) / event.total);
                if (progress != 100) {
                    _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.fileUploadedSubject, progress);
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
            return event.body;
        }));
    }
    fetchMessages(conversationId, page) {
        const url = `${this.CONVERSATIONS_BASE_URL}/${conversationId}/messages?page=${page}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.currentConversation.messages = [...this.currentConversation.messages, ...res.data];
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.currentConversationSubject, this.currentConversation);
        }));
    }
    subscribeMarkNewMessageAsRead() {
        const URL = `${_config__WEBPACK_IMPORTED_MODULE_4__["WEB_SOCKET_PRIVATE_ENDPOINT"]}/user/${_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"].getCurrentUser().id}/conversationReadStatus`;
        this.stompService.watch(URL, (res) => {
            if (!res.success) {
                this.toastService.show(res.message, false);
                return;
            }
            this.currentConversation.hasNewMessage = false;
            this.conversations.find(con => con.id === this.currentConversation.id).hasNewMessage = false;
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.conversationsSubject, this.conversations);
            _utils_observable_util__WEBPACK_IMPORTED_MODULE_6__["ObservableUtil"].notify(this.currentConversationSubject, this.currentConversation);
        });
    }
    unsubscribeConversationChannel(conversationId) {
        const url = `${_config__WEBPACK_IMPORTED_MODULE_4__["WEB_SOCKET_PUBLIC_ENDPOINT"]}/conversations/${conversationId}/textMessages`;
        this.stompService.unwatch(url, () => {
        });
    }
}
ConversationService.ɵfac = function ConversationService_Factory(t) { return new (t || ConversationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_components_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_file_fetcher_service__WEBPACK_IMPORTED_MODULE_8__["FileFetcherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_stomp_service__WEBPACK_IMPORTED_MODULE_9__["StompService"])); };
ConversationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConversationService, factory: ConversationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConversationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _components_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }, { type: _file_fetcher_service__WEBPACK_IMPORTED_MODULE_8__["FileFetcherService"] }, { type: _stomp_service__WEBPACK_IMPORTED_MODULE_9__["StompService"] }]; }, null); })();


/***/ }),

/***/ "vTWv":
/*!****************************************************!*\
  !*** ./src/app/requests/delete-account.request.ts ***!
  \****************************************************/
/*! exports provided: DeleteAccountRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAccountRequest", function() { return DeleteAccountRequest; });
class DeleteAccountRequest {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_conversations_conversations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/conversations/conversations.component */ "PZBJ");
/* harmony import */ var _components_conversation_detail_conversation_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/conversation-detail/conversation-detail.component */ "97e/");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_contact_features_contact_features_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact-features/contact-features.component */ "NPJq");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "MXpY");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth/auth.component */ "qrmE");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/signin/signin.component */ "WnTk");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "JcAc");
/* harmony import */ var _components_received_contact_requests_received_contact_requests_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/received-contact-requests/received-contact-requests.component */ "5kOt");
/* harmony import */ var _components_sent_contact_requests_sent_contact_requests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sent-contact-requests/sent-contact-requests.component */ "jLzO");
















const routes = [
    {
        path: 'auth',
        component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
        children: [
            {
                path: 'signin',
                component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"]
            },
            {
                path: 'signup',
                component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]
            },
            { path: '', redirectTo: 'signin', pathMatch: 'full' }
        ]
    },
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
        children: [
            {
                path: 'conversations',
                component: _components_conversations_conversations_component__WEBPACK_IMPORTED_MODULE_2__["ConversationsComponent"],
                children: [
                    {
                        path: '',
                        component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"]
                    },
                    {
                        path: ':id',
                        component: _components_conversation_detail_conversation_detail_component__WEBPACK_IMPORTED_MODULE_3__["ConversationDetailComponent"]
                    }
                ]
            },
            {
                path: 'contactFeatures',
                component: _components_contact_features_contact_features_component__WEBPACK_IMPORTED_MODULE_5__["ContactFeaturesComponent"],
                children: [
                    {
                        path: 'contacts',
                        component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"]
                    },
                    {
                        path: 'receivedContactRequests',
                        component: _components_received_contact_requests_received_contact_requests_component__WEBPACK_IMPORTED_MODULE_12__["ReceivedContactRequestComponent"]
                    },
                    {
                        path: 'sentContactRequests',
                        component: _components_sent_contact_requests_sent_contact_requests_component__WEBPACK_IMPORTED_MODULE_13__["SentContactRequestComponent"]
                    }
                ]
            }
        ]
    },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xqy/":
/*!****************************************************!*\
  !*** ./src/app/services/voice-recorder.service.ts ***!
  \****************************************************/
/*! exports provided: VoiceRecorderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceRecorderService", function() { return VoiceRecorderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recordrtc */ "qe5e");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_2__);




class VoiceRecorderService {
    startRecording() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.stream = yield navigator.mediaDevices.getUserMedia({ audio: true, video: false });
                this.recorder = new recordrtc__WEBPACK_IMPORTED_MODULE_2__(this.stream, { type: 'audio' });
                this.recorder.startRecording();
            }
            catch (err) {
                alert("DEVICE NOT FOUND");
            }
        });
    }
    stopRecording() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.recorder.stopRecording(() => {
                    let blob = this.recorder.getBlob();
                    resolve(blob);
                    // free up resources
                    this.recorder.destroy();
                    this.recorder = null;
                    // stop media stream
                    this.stream.getAudioTracks().forEach(track => track.stop());
                    this.stream = null;
                });
            });
        });
    }
}
VoiceRecorderService.ɵfac = function VoiceRecorderService_Factory(t) { return new (t || VoiceRecorderService)(); };
VoiceRecorderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VoiceRecorderService, factory: VoiceRecorderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VoiceRecorderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../change-password-modal/change-password-modal.component */ "2R26");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config */ "Vx+w");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-modal/confirm-modal.component */ "TL7l");
/* harmony import */ var _delete_account_modal_delete_account_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-account-modal/delete-account-modal.component */ "Ediw");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../toast/toast.service */ "21mK");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");










class SidebarComponent {
    constructor(ngbModal, router, toastService, authService) {
        this.ngbModal = ngbModal;
        this.router = router;
        this.toastService = toastService;
        this.authService = authService;
    }
    onChangePasswordModalOpened() {
        this.ngbModal.open(_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordModalComponent"], src_app_config__WEBPACK_IMPORTED_MODULE_2__["NGB_MODAL_BACKDROP_STATIC_OPTIONS"]);
    }
    onSignedOut() {
        const modalRef = this.ngbModal.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], src_app_config__WEBPACK_IMPORTED_MODULE_2__["NGB_MODAL_BACKDROP_STATIC_OPTIONS"]);
        this.modalConfirmSubscription = modalRef.componentInstance.onModalConfirmed().subscribe(() => {
            modalRef.close();
            this.modalConfirmSubscription.unsubscribe();
            this.authService.signOut();
            this.toastService.show('Signed out successfully', true);
            this.router.navigate(['/auth/signin']);
        });
    }
    onDeleteAccountModalOpened() {
        this.ngbModal.open(_delete_account_modal_delete_account_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteAccountModalComponent"], src_app_config__WEBPACK_IMPORTED_MODULE_2__["NGB_MODAL_BACKDROP_STATIC_OPTIONS"]);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 21, vars: 0, consts: [[1, "h-100", "bg-success"], [1, "d-flex", "flex-column", "h-100", "justify-content-around"], [1, "d-flex", "flex-column"], ["routerLink", "/conversations", "routerLinkActive", "active", 1, "btn", "btn-success", "p-3"], [1, "fa-regular", "fa-comments", "fa-lg"], ["routerLink", "/contactFeatures", "routerLinkActive", "active", 1, "btn", "btn", "btn-success", "p-3"], [1, "fa-regular", "fa-address-book", "fa-lg"], [1, "btn-group", "dropend"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn", "btn-success", "p-3"], [1, "fa-solid", "fa-gear", "fa-lg"], [1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [1, "dropdown-item", "text-danger", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_11_listener() { return ctx.onChangePasswordModalOpened(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_15_listener() { return ctx.onSignedOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_19_listener() { return ctx.onDeleteAccountModalOpened(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Delete account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "zR0G":
/*!*****************************************************!*\
  !*** ./src/app/requests/change-password.request.ts ***!
  \*****************************************************/
/*! exports provided: ChangePasswordRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordRequest", function() { return ChangePasswordRequest; });
class ChangePasswordRequest {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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