export function schema(objects){
    let data = {};
    let key;
    const values = Object.keys(objects).map(key => objects[key]);
    const keys = Object.keys(objects);
    for (key in values) {
      if (
        typeof values[key].value === "undefined" &&
        values[key].required === true
      ) {
        throw new TypeError(
          `This field ${keys[key]} is marked as required but got undefined`
        );
      }
      if (
        !values[key].required ||
        typeof values[key].value === values[key].type
      ) {
        Object.assign(data, {
          [keys[key]]: values[key].value
        });
      } else {
        throw new TypeError(
          `Unexpected value supplied to ${keys[key]} Expected type of ${
            values[key].type
          }`
        );
      }
      if( typeof values[key].value === "undefined" ){
        Object.assign(data, {
        [keys[key]]: null
      });
    }
    }
    return data;
  }
  