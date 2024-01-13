/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Card extends Component {

    static props = {
        title: String,
        content: String,
    };
    
    static template = "awesome_owl.card";

    setup() { }
}
