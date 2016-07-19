# Tenx USB Missile Launcher driver for NodeJS - fires foam rockets

# Tenx Driver
This module contains a driver that opens a Tenx USB Missle Launcher using the Node USB library and then sends Left, Right, Up, Down, Stop and Fire commands.

The USB Vendor ID is 0x1130 (4400 decimal) and the USB Product ID is 0x0202 (514)

# Console Application
A companion program, keyboard.js reads the command line keyboard so that the Cursor Keys can be used to turn the missile launcher.

# Test Hardware
Tested with a UK Marks and Spencer USB Missile Launcher running on a Raspberry Pi.

# Dependencies
Depends on the 'usb' package to talk to the USB port and the 'keypress' package to read the command line

# Acknowledgements
Thanks go to Luke Cole for the USBMisslieLauncher program (v1.5) which was used for inspiration and native USB protocol. 
 * http://lukecole.name/
 * http://sourceforge.net/projects/usbmissile


