import { defineCustomElement } from 'vue'
import Donation from './donation-window.ce.vue'

const element = defineCustomElement(Donation);

customElements.define('donation-window', element)
