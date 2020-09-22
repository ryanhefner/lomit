export function omit(obj = {}, props = []) {
  obj = {...obj};

  props.forEach((prop) => {
    const deepIndex = prop.indexOf('.');
    if (deepIndex !== -1) {
      const activeKey = prop.slice(0, deepIndex);
      const activeProps = prop.slice(deepIndex + 1);

      if (activeKey && obj[activeKey]) {
        obj[activeKey] = omit(obj[activeKey], [activeProps]);
      }
    } else {
      obj.hasOwnProperty(prop) && delete(obj[prop]);
    }
  });

  return obj;
}
