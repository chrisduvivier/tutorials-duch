/** @odoo-module **/

import { Component, useState, markup } from "@odoo/owl";
import { Counter } from "./counter";
import { Card } from "./card";

export class Playground extends Component {
    static template = "awesome_owl.playground";

    setup() {
        this.state = useState({ value: 0 });
        this.sum = useState({ value: 2 });
    }

    increment() {
        this.state.value++;
    }

    incrementSum() {
        this.sum.value++;
    }

    value1 = "<div class='text-primary'>some content</div>";
    value2 = markup("<div class='text-primary'>some content</div>");
    static components = { Counter, Card };

}
