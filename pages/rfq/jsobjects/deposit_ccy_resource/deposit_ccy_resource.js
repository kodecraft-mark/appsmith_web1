export default {
	selectedValue: currency_pair.selectedOptionValue,
	values: this.selectedValue.split("/"), // Initialize as an empty array

	populate_ccys: function () {
		//deposit_ccy.setOptions('');

		// Split the selectedValue into values and store it in this.values
		//this.values = this.selectedValue.split("/");
		
		// Populate the deposit_ccy select element with options
		this.values.forEach(function (value) {
			var option = document.createElement("option");
			option.value = value;
			option.text = value;
			deposit_ccy.setOptions(option)
		});
	}
};
