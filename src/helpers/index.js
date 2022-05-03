export const errorMessage = (label, name, $v) => {
    const errors = [];
    if(!$v.form[name].required && $v.form[name].$error) {
       errors.push(`${label} is required.`);
    }
    if(!$v.form[name].minLength && $v.form[name].$error) {
       console.log($v.form[name])
       if ($v.form[name].$params.minLength) {
          errors.push(`${label} must have at least ${$v.form[name].$params.minLength.min} letters.`)
       }
    }
    if(!$v.form[name].maxLength && $v.form[name].$error) {
       if ($v.form[name].$params.maxLength) {
          errors.push(`${label} must have no more than ${$v.form[name].$params.maxLength.max} letters.`)
       }
    }
    if(!$v.form[name].email && $v.form[name].$error) {
       errors.push(`${label} is not valid.`);
    }
    return errors;
 };