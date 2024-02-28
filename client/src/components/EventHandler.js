import React, { useState, useEffect } from 'react';
import socketIO from 'socket.io-client';

const EventHandler = () => {
  useEffect(() => {
	const socket = socketIO.connect('http://localhost:4000');
	socket.on('message2', (data) => {
		console.log('Pressed2');
  	});
	console.log('Here');
	  return () => socket.emit('end');
  }, []);

  return (<div></div>);
};

export default EventHandler;

