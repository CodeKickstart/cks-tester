{%- set id_closed = val(tokens, "base.id_closed") -%}

import { useState, useEffect } from 'react';

import classes from './{{name}}-comp.module.css';

function {{Name}}() {

  return (
    <section className={classes.{{name}}}>
      <h1>{{Name}}</h1>
      <p> {{person}} was indeed here </p>

      {%- if id_closed == "1" -%}
        <p> currently closed </p>
      {%- else -%}
        <p>  open for business </p>
      {%- endif -%}

      <p> blah blah blah ... </p>

    </section>
  );
}

export default {{Name}};
