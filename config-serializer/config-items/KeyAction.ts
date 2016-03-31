// A KeyAction is composed of 3 bytes in the RAM and up to 3 bytes in the EEPROM of the UHK.
// The first byte denotes the subclass of the KeyAction and its length in the EEPROM.

enum KeyActionId {
    NoneAction                   = 0,
    KeystrokeAction              = 1,
    KeystrokeWithModifiersAction = 2,
    DualRoleKeystrokeAction      = 3,
    SwitchLayerAction            = 4,
    SwitchKeymapAction           = 5,
    MouseAction                  = 6,
    PlayMacroAction              = 7
}

class KeyAction {

    static fromJsObject(jsObject: any): KeyAction {
        switch (jsObject.keyActionType) {
            case NoneAction.keyActionTypeString:
                return new NoneAction().fromJsObject(jsObject);
            case KeystrokeAction.keyActionTypeString:
                return new KeystrokeAction().fromJsObject(jsObject);
            case KeystrokeWithModifiersAction.keyActionTypeString:
                return new KeystrokeWithModifiersAction().fromJsObject(jsObject);
            case DualRoleKeystrokeAction.keyActionTypeString:
                return new DualRoleKeystrokeAction().fromJsObject(jsObject);
            case SwitchLayerAction.keyActionTypeString:
                return new SwitchLayerAction().fromJsObject(jsObject);
            case SwitchKeymapAction.keyActionTypeString:
                return new SwitchKeymapAction().fromJsObject(jsObject);
            case MouseAction.keyActionTypeString:
                return new MouseAction().fromJsObject(jsObject);
            default:
                throw `Invalid KeyAction.keyActionType: "${jsObject.actionType}"`;
        }
    }

    static fromBinary(buffer: UhkBuffer): KeyAction {
        let keyActionFirstByte = buffer.readUInt8();
        buffer.backtrack();

        switch (keyActionFirstByte) {
            case KeyActionId.NoneAction:
                return new NoneAction().fromBinary(buffer);
            case KeyActionId.KeystrokeAction:
                return new KeystrokeAction().fromBinary(buffer);
            case KeyActionId.KeystrokeWithModifiersAction:
                return new KeystrokeWithModifiersAction().fromBinary(buffer);
            case KeyActionId.DualRoleKeystrokeAction:
                return new DualRoleKeystrokeAction().fromBinary(buffer);
            case KeyActionId.SwitchLayerAction:
                return new SwitchLayerAction().fromBinary(buffer);
            case KeyActionId.SwitchKeymapAction:
                return new SwitchKeymapAction().fromBinary(buffer);
            case KeyActionId.MouseAction:
                return new MouseAction().fromBinary(buffer);
            default:
                throw `Invalid KeyAction first byte: ${keyActionFirstByte}`;
        }
    }

    assertKeyActionType(jsObject: any, keyActionTypeString: string, classname: string) {
        if (jsObject.keyActionType !== keyActionTypeString) {
            console.log(arguments.callee.prototype.name);
            throw `Invalid ${classname}.keyActionType: ${jsObject.keyActionType}`;
        }
    }

    readAndAssertKeyActionId(buffer: UhkBuffer, keyActionIdParam: KeyActionId, classname: string) {
        let readKeyActionId = buffer.readUInt8();
        if (readKeyActionId !== keyActionIdParam) {
            throw `Invalid ${classname} first byte: ${readKeyActionId}`;
        }
    }
}
