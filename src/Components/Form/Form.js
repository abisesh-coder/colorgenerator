import React from 'react'
import "./Form.css"

const Form = ({ input, setInput, submitHandler, alert, inputRef }) => {
  const { msg, type } = alert;

  return (
    <>
    <section className="container">
      {/* Form */}
      <form className="form">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a color"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn" onClick={submitHandler}>
          Generate
        </button>
      </form>
      {alert.show ? (
        <p className={`hint ${type}`}>{msg}</p>
      ) : (
        <p className="hint">( rgb, hex, color name, etc. )</p>
      )}
    </section>

    </>
  )
}

export default Form