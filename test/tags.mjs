import chai from "chai";
const { expect } = chai;

import { tagsToHashedString } from "../src/tags.mjs";

describe('Tags', function () {
    
    describe('tagsToHashedString', function () {
        
        it('should result in empty string on no or empty array', function () {
            const noParams = tagsToHashedString();
            expect(noParams).to.be.empty;

            const emptyList = tagsToHashedString([]);
            expect(emptyList).to.be.empty;
        });

        it('should correctly add # to tag lists', function () {
            
            const tagList = ["javascript", "node.js", "typescript"];

            const hashtags = tagsToHashedString(tagList);
            expect(hashtags).to.equal("#javascript #node.js #typescript");
        });

    });

});