var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

var clippingsParser = require('../index');

describe('Simple Clippings Parser', function() {

    it('should have function parseFile', function() {
        clippingsParser.should.have.property('parseFile');
    });

    it('should parse data from .txt file', function() {
        return clippingsParser.parseFile('tests/example.txt').then(function(data) {
            should.exist(data);
        });
    });

    it('should return 2 records from test file', function() {
        return clippingsParser.parseFile('tests/example.txt').then(function(data) {
            expect(data.length).to.equal(2);
        });
    });

    it('should return expected valid object', function() {
        return clippingsParser.parseFile('tests/example.txt').then(function(data) {
            var firstClip  = data[0];

            expect(firstClip.book).to.equal('Test1');
            expect(firstClip.author).to.equal('Phantom');
            expect(firstClip.date).to.be.a('date');
            expect(firstClip.quote).to.equal('Text1');
        });
    });

});