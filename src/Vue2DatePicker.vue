<template>
    <input :placeholder="placeholder"/>
</template>

<script>
    export default {
        props: {
            'dateFormat': String,
            'useModel': Boolean,
            'value': String,
            'min': Date,
            'max': Date,
            'changeMonth': Boolean,
            'changeYear': Boolean,
            'placeholder': String
        },
        data() {
            return {

            };
        },
        watch: {
            min: function(val) {
                this.updateMinDate(); 
            }
        },
        methods: {
            updateMinDate: function() {
                $(this.$el).datepicker('hide').datepicker('destroy');
                this.createCalender();
            },
            createCalender: function() {
                var ths = this;
                $(this.$el).datepicker({
                    changeMonth: this.changeMonth === undefined ? null : this.changeMonth,
                    changeYear: this.changeYear === undefined ? null : this.changeYear,
                    dateFormat: this.dateFormat,
                    yearRange: "-110:+0",
                    minDate: this.min === undefined ? null : this.min,
                    maxDate: this.max === undefined ? null : this.max,
                    onSelect: function(date) {
                        if (ths.useModel === undefined) {
                            ths.$emit('update-date', date);
                        } else {
                            ths.$emit('input', date);
                        }
                    }
                });
            }
        },
        mounted() {
            this.createCalender();
        },
        beforeDestroy() {
            $(this.$el).datepicker('hide').datepicker('destroy');
        }
    }
</script>
