describe ("Matching Days", function(){
    describe ("Should be able to get the day for the date selected.", function(){
        it('Should return Monday for the following first date inserted: 17/05/2021', function(){

            var matchingTests = Factory();
            
            assert.equal('Monday', matchingTests.getTheFirstDay('2021-05-17'));
        })

        it('Should return Wednesday for the following second date inserted: 12/05/2021', function(){

            var matchingTests = Factory();
            
            assert.equal('Wednesday', matchingTests.getTheSecondDay('2021-05-12'));
        })
    })

    describe ("Should be able to indicate if both dates have a matching day.", function(){
        it('Should return true if both dates inserted has a matching day.', function(){

            var matchingTests = Factory();

            matchingTests.getTheFirstDay('2021-05-24');
            matchingTests.getTheSecondDay('2021-05-31');
            
            assert.equal(true, matchingTests.checkMatch());
        })

        it('Should return false if both dates inserted does not have a matching day.', function(){

            var matchingTests = Factory();

            matchingTests.getTheFirstDay('2021-05-24');
            matchingTests.getTheSecondDay('2021-05-21');
            
            assert.equal(false, matchingTests.checkMatch())
        })
    })

    describe ("Should be able to add appropriate colour change when dates are selected.", function(){
        it('Should return colour red when first date is entered.', function(){
            var matchingTests = Factory();

            matchingTests.getTheFirstDay('2021-05-24');

            assert.equal("red", matchingTests.values().theFirstColour)
        })

        it('Should return colour purple when second date is entered.', function(){
            var matchingTests = Factory();

            matchingTests.getTheSecondDay('2021-05-21');

            assert.equal("purple", matchingTests.values().theSecondColour)
        })

        it('Should return colour green when first date and second date has a matching day.', function(){
            var matchingTests = Factory();
            
            matchingTests.getTheFirstDay('2021-05-24');
            matchingTests.getTheSecondDay('2021-05-31');

            assert.equal("green", matchingTests.theMatch())
        })
    })
})