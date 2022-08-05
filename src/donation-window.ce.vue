
<template>
<form id="form" @submit.prevent="submit" @reset="onReset">
  <input type="hidden" name="currency" value="usd" />
  <input type="hidden" name="merchant_id" value="usd" />
  <input type="hidden" name="recurring" value="false" />
  <!-- HEADER -->
  <div style="display:flex;flex-direction:row;">
    <div style="background:#061a62;flex-grow:1;">
      <h2 style="color:white;font-family:sans-serif;text-align:center;">Choose amount</h2>
    </div>
  </div>
  <!-- Donation Freq. -->
  <div style="display:flex;flex-direction:row;justify-content:center;">
    <div class="donationFreq">
      <span class="large1" onclick="">One-time</span>
    </div>
    <div class="donationFreq">
      <span class="large1">Monthly</span>
    </div>
  </div>
  <!-- Amount Presets -->
  <div class="amountPresetsContainer">
    <div class="amountPreset">
      <span class="large1">&nbsp;$10</span>
    </div>
    <div class="amountPreset">
      <span class="large1">&nbsp;$25</span>
    </div>
    <div class="amountPreset">
      <span class="large1">&nbsp;$50</span>
    </div>
  </div>
  <div class="amountPresetsContainer">
    <div class="amountPreset">
      <span class="large1">$100</span>
    </div>
    <div class="amountPreset">
      <span class="large1">$250</span>
    </div>
    <div class="amountPreset">
      <span class="large1">$500</span>
    </div>
  </div>
  <!-- Custom Amount -->
  <div style="display:flex;flex-direction:row;justify-content:center;margin:2vh;">
    <div class="">
      <input v-model="customAmount" data-cy="customAmount" placeholder="$ Custom Amount" type="number" min="0.01" step="0.01" style="padding: 1vh;border: 1px solid #cdcfd4;border-radius: 0.4vh;width: 72vw;" />
    </div>
  </div>
  <!-- Next Button -->
  <div style="display:flex;flex-direction:row;justify-content:center;flex-wrap:no-wrap;">
    <div class="">
      <button type="submit" data-cy="donate" style="padding: 1vh;border: 1px solid #cdcfd4;border-radius: 0.4vh;width: 72vw;">Donate</button>
    </div>
  </div>
  

    <!-- <div>
      <label>name</label>
      <input v-model="name" data-cy="firstName"/>
    </div>
    <div>
      <label>email</label>
      <input v-model="email" data-cy="email"/>
    </div>
    <div>
      <label>message</label>
      <textarea v-model="message" data-cy="message"></textarea>
    </div>
    <button type="submit" data-cy="submit">submit</button>
    <button type="reset" data-cy="reset">reset</button> -->

  </form>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      email: "",
      recurring: "",
      donationAmount: "",
      currency: "",
      marchant_id: "",
    };
  },
  computed: {
    formValid() {
      
      return true;
    },
  },
  methods: {
    submit() {
      console.log('submit attempt...');
      if (!this.formValid) {
        console.log('errors in fields');
        return;
      }

      fetch('http://neonpay.test/api/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // like application/json or text/xml
        },
        body: {
          name: this.name,
          email: this.email,
          recurring: this.recurring,
          donationAmount: this.donationAmount,
          currency: this.currency,
          marchant_id: this.merchant_id
        }
      });

    },
  },
};
</script>




// Define it as a custom element
customElements.define('donation-window', Donation);

<style scoped>

div.header {
  display: inline-block;
  background: green;
  min-height: 30px;
  padding: 15px;
  margin: 0px;
}
amountPreset
div.donationFreq{
    background: #c4c4c4;
    border: 1px solid #001b5e;
    border-radius: 0.5vh;
}
div.amountPreset{
    background: #ededed;
    border: 1px solid #dddddd;
    border-radius: 0.5vh;
    margin: 1vh;
}

span.large1 {
    margin: 0px;
    padding: 15px;
    display: inline-block;
    color: #1e3d6f;
    font-family: sans-serif;
    text-align: center;
}

div.amountPresetsContainer{
  display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:no-wrap;
}

</style>