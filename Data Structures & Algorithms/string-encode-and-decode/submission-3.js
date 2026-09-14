class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let delimiter = '';
        let encoded = '';

        for (const str of strs) {
            delimiter  = str.length + '#';
            encoded += (delimiter + str);
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let len = 0;
        let i = 0;
        let j = 0;

        while (i < str.length) {
            j = i;
            while (str[j] !== '#') {
                j++;
            }
            len = +(str.slice(i, j));
            res.push(str.slice(j+1, j+len+1));

            i = j + 1 + len;
        }

        return res;
    }
}
