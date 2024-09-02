# test-modal-again

`test-modal-again` is a simple and lightweight React component for displaying modals.

## Installation

You can install this package via npm:

```bash
npm install test-modal-again
```

## Usage

To use the Modal component in your React project, import it and use it as follows:

```
import React, { useState } from 'react';
import Modal from 'test-modal-again';
import './App.css'; // Ensure the CSS is imported

function App() {
const [isModalVisible, setModalVisible] = useState(false);

const openModal = () => setModalVisible(true);
const closeModal = () => setModalVisible(false);

return (
<div className="App">
<button onClick={openModal}>Open Modal</button>
<Modal isVisible={isModalVisible} onClose={closeModal}>
<h2>Modal Title</h2>
<p>This is a simple modal.</p>
</Modal>
</div>
);
}

export default App;
```

## Props

The Modal component accepts the following props:

isVisible: boolean - Controls the visibility of the modal. If true, the modal is displayed; if false, it is hidden.

onClose: function - A function to be called when the modal is closed. This is typically used to set the isVisible prop to false.

children: ReactNode - The content of the modal. This can include text, images, buttons, or any other React components.

## CSS Styling

To style the modal, you need to import the provided CSS file in your project. You can customize the styling by overriding the provided classes.

Here is the default CSS for the modal:

```
.modal {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
}

.modal-content {
background-color: white;
padding: 20px;
border-radius: 5px;
max-width: 500px;
width: 100%;
}

.button-color {
margin-top: 10px;
padding: 5px 10px;
background-color: #007bff;
color: white;
border: none;
border-radius: 3px;
cursor: pointer;
}
```

## License

This project is licensed under the MIT License.
