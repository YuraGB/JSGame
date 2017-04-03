/**
 * @file JSGame Shadow Component. Adds a shadow to the parent GameObject
 * @package jsgame
 * @copyright (c) 2016, Thomas Alrek
 * @author Thomas Alrek <thomas@alrek.no>
 */

"use strict";

/**
 * @class Shadow
 * Creates a new instance of Shadow.
 * <p><i>Shadow is an instance of Component</i></p>
 *
 * @constructor
 * @param {options} options An object containing construct options
 * @property {Color} color An instance of Color representing the Shadows color
 * @property {number} blur A number representing the Shadows blur radius
 * @property {GameObject} parent A reference to the Shadows parent
 */
import Component from "../Class/Component.js";
import JSGameEngine from "../Class/JSGameEngine";
import Color from "./Color.js";

export default class khadow extends Component {
    constructor(options){
        super(options);
        this.__extend(Component, this, options);
        this.color = new Color();
        this.__construct(this, options);
    }
    __update (JSGameEngine) {
        const ctx = JSGameEngine.ctx;
        ctx.shadowBlur = this.blur;
        ctx.shadowColor = this.color.toString();
    }
}