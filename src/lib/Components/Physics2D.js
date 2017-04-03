/**
 * @file JSGame Physics2D Component.
 * @package jsgame
 * @copyright (c) 2016, Thomas Alrek
 * @author Thomas Alrek <thomas@alrek.no>
 */

"use strict";

/**
 * @class Physics2D
 * Creates a new instance of Physics2D.
 * <p><i>Input is an instance of Component</i></p>
 *
 * @constructor
 * @param {options} options An object containing construct options
 */
export default class Physics2D extends Component {
    constructor (options) {
        super(options);
        this.__extend (Component, this, options);
        this.gravity = new Vector2 ({y : 9.81, parent : this});
        this.velocity = new Vector2 ({parent : this});
        this.__construct(this, options);
    }
    fixedUpdate (timestamp) {
        this.addForse (this.gravity.multiply (timestamp * 10));
    }
    addForse (force) {
        if(!(force instanceof Vector2)){
            throw TypeError ("Force must be an instance of Vector2");
        }
        this.velocity.add(force);
        return this.velocity;
    }
}