/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Counter extends Component {

    static template = "awesome_owl.counter";

    static props = {
        // accept an optional onChange function prop
        onChange: { type: Function, optional: true },
    };

    setup() {
        this.counter = useState({ value: 0 });
    }

    increment() {
        this.counter.value++;
        // call the onChange function prop if it exists
        if (this.props.onChange) {
            this.props.onChange();
        }
    }
}
