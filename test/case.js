'use strict'

/**
 * Dummy function for testing.
 *
 * @returns {undefined}
 */
function testCase() {
  const linkElements = document.querySelectorAll('a')

  for (const link of linkElements) {
    link.addEventListener('click', listenerCallback)
  }
}

/**
 * Listener callback.
 *
 * @param   {object} event Event object.
 * @returns {undefined}
 */
function listenerCallback(event) {
  event.preventDefault()

  event.target.textContent = 'Just a test'
}

export default testCase
