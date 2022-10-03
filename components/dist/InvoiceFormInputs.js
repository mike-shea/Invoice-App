"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var FieldSet_1 = require("./FieldSet");
var TextInput_1 = require("./TextInput");
var DateInput_1 = require("./DateInput");
var InvoiceFormItemElement_1 = require("./InvoiceFormItemElement");
function InvoiceFormInputs(_a) {
    var userInfo = _a.userInfo, clientInfo = _a.clientInfo, details = _a.details, items = _a.items;
    return (react_1["default"].createElement("form", null,
        react_1["default"].createElement(FieldSet_1["default"], { legendLabel: "Sender" },
            react_1["default"].createElement(TextInput_1["default"], { state: userInfo.state.street, setState: userInfo.setState.setStreet, label: "Street Address" }),
            react_1["default"].createElement("div", { className: "grid w-full grid-cols-2 gap-x-4 lg:grid-cols-3" },
                react_1["default"].createElement(TextInput_1["default"], { state: userInfo.state.city, setState: userInfo.setState.setCity, label: "City" }),
                react_1["default"].createElement(TextInput_1["default"], { state: userInfo.state.postalCode, setState: userInfo.setState.setPostalCode, label: "Postal Code" }),
                react_1["default"].createElement(TextInput_1["default"], { state: userInfo.state.country, setState: userInfo.setState.setCountry, label: "Country" }))),
        react_1["default"].createElement(FieldSet_1["default"], { legendLabel: "Bill To" },
            react_1["default"].createElement(TextInput_1["default"], { state: clientInfo.state.clientName, setState: clientInfo.setState.setClientName, label: "Client's Name" }),
            react_1["default"].createElement(TextInput_1["default"], { state: clientInfo.state.clientEmail, setState: clientInfo.setState.setClientEmail, label: "Client's Email" }),
            react_1["default"].createElement(TextInput_1["default"], { state: clientInfo.state.clientStreet, setState: clientInfo.setState.setClientStreet, label: "Street Address" }),
            react_1["default"].createElement("div", { className: "grid w-full grid-cols-2 gap-x-4 lg:grid-cols-3" },
                react_1["default"].createElement(TextInput_1["default"], { state: clientInfo.state.clientCity, setState: clientInfo.setState.setClientCity, label: "City" }),
                react_1["default"].createElement(TextInput_1["default"], { state: clientInfo.state.clientPostalCode, setState: clientInfo.setState.setClientPostalCode, label: "Postal Code" }),
                react_1["default"].createElement(TextInput_1["default"], { state: clientInfo.state.clientCountry, setState: clientInfo.setState.setClientCountry, label: "Country" }))),
        react_1["default"].createElement(FieldSet_1["default"], { legendLabel: "Details" },
            react_1["default"].createElement(DateInput_1["default"], __assign({}, details))),
        react_1["default"].createElement(FieldSet_1["default"], { legendLabel: "Items to Add" },
            react_1["default"].createElement("ul", { className: "flex flex-col gap-y-8 " }, items.state.map(function (item) {
                return (react_1["default"].createElement(InvoiceFormItemElement_1["default"], { itemCounter: items.state, setItemCounter: items.setState, key: item.id, id: item.id }));
            })))));
}
exports["default"] = InvoiceFormInputs;
