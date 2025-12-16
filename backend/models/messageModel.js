// Simple model - in-memory data
const state = {
  message: 'Hello from Node backend (MVC)!'
}

exports.getMessage = () => state.message
