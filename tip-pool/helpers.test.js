describe("Payment Utilities", function() {
    // Set up initial payment before each test
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
  
    // Test cases for sumPaymentTotal function
    describe("sumPaymentTotal()", function() {
      it('should sum total tip amount of all payments', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
  
        // Add another payment
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
  
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
      });
  
      it('should sum total bill amount of all payments', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);
  
        // Add another payment
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
  
        expect(sumPaymentTotal('billAmt')).toEqual(300);
      });
  
      it('should sum total tip percent', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
  
        // Add another payment
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
  
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
      });
    });
  
    // Test cases for calculateTipPercent function
    describe("calculateTipPercent()", function() {
      it('should sum tip percent of a single tip', function () {
        expect(calculateTipPercent(100, 23)).toEqual(23);
        expect(calculateTipPercent(111, 11)).toEqual(10);
      });
    });
  
    // Test cases for appendTd and appendDeleteBtn functions
    describe("DOM Manipulation", function() {
      it('should generate new td from value and append to tr', function () {
        let newTr = document.createElement('tr');
  
        appendTd(newTr, 'test');
  
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });
  
      it('should generate delete td and append to tr', function () {
        let newTr = document.createElement('tr');
  
        appendDeleteBtn(newTr);
  
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });
    });
  
    // Reset state after each test
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds.forEach(td => td.innerHTML = '');
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });