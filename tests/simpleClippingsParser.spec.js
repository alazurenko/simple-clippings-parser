'use strict';
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
const RECORDS_IN_FILE = 2;

const clippingsParser = require('../index');

describe('Simple Clippings Parser', () => {

    it('should have function parseFile', () => {
        clippingsParser.should.have.property('parseFile');
    });

    it('should parse data from .txt file', () => {
        return clippingsParser.parseFile('tests/example.txt').then(data => {
            should.exist(data);
        });
    });

    it('should return 2 records from test file', () => {
        return clippingsParser.parseFile('tests/example.txt').then(data => {
            expect(data.length).to.equal(RECORDS_IN_FILE);
        });
    });

    it('should return expected valid object', () => {
        return clippingsParser.parseFile('tests/example.txt').then(data => {
            let firstClip  = data[0];

            expect(firstClip.book).to.equal('Test1');
            expect(firstClip.author).to.equal('Phantom');
            expect(firstClip.date).to.be.a('date');
            expect(firstClip.quote).to.equal('Text1');
        });
    });

});
