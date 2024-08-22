/**
 * Checks if a field definition is of type 'temporal' or uses a time format.
 * @param {Object} fieldDef - The field definition object.
 * @returns {boolean} True if the field is temporal or uses a time format, otherwise false.
 */
function isTemporalOrTimeFormatField(fieldDef) {
    // Check if the field definition has type 'temporal'
    const isTemporal = fieldDef.type === 'temporal';

    // Placeholder function to check if a field definition uses a time format
    // You need to replace this with the actual implementation of isTimeFormatFieldDef
    function isTimeFormatFieldDef(fieldDef) {
        // Example check: assuming time formats are specified in a 'timeFormat' property
        return fieldDef.timeFormat !== undefined;
    }

    // Check if the field definition uses a time format
    const usesTimeFormat = isTimeFormatFieldDef(fieldDef);

    // Return true if either condition is met
    return isTemporal || usesTimeFormat;
}

// Example usage
const fieldDef1 = { type: 'temporal' };
const fieldDef2 = { timeFormat: '%Y-%m-%d' };
const fieldDef3 = { type: 'quantitative' };

console.log(isTemporalOrTimeFormatField(fieldDef1)); // true (temporal)
console.log(isTemporalOrTimeFormatField(fieldDef2)); // true (uses time format)
console.log(isTemporalOrTimeFormatField(fieldDef3)); // false (neither)
