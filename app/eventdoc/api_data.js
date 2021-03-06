define({ "api": [
  {
    "type": "emit",
    "url": "/accept-friend-request",
    "title": "Accepting Friend Request",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;accept-friend-request&quot;)</b> has to be emitted when a user accepts the friend request</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n    userId,\n    friendId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitAcceptFriendRequest"
  },
  {
    "type": "emit",
    "url": "/change-status",
    "title": "Change Friend Request Status",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;change-status&quot;)</b> has to be emitted when a user wants to change the status</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{   \n    status,\n    userId,\n    friendId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitChangeStatus"
  },
  {
    "type": "emit",
    "url": "/disconnect",
    "title": "diconnecting the socket service",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;disconnect&quot;)</b> has to be emitted when a user logout or closes the application.</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitDisconnect"
  },
  {
    "type": "emit",
    "url": "/mark-seen",
    "title": "Mark Seen",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;mark-seen&quot;)</b> has to be emitted when a user wants to mark the notification as seen</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{   \n    notificationId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitMarkSeen"
  },
  {
    "type": "emit",
    "url": "/remove-friend",
    "title": "Remove Friend from the list",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;remove-friend&quot;)</b> has to be emitted when a user wants unfriend or remove a friend from the list</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{   \n    userId,\n    friendId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitRemoveFriend"
  },
  {
    "type": "emit",
    "url": "/send-friend-request",
    "title": "sending request to user",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;send-friend-request&quot;)</b> has to be emitted when a user sends friend request to another user.</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n    friendName: String,\n    friendId: String,\n    email: String, \n    mobileNumber: Number\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitSendFriendRequest"
  },
  {
    "type": "emit",
    "url": "/set-user",
    "title": "Setting user online",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;set-user&quot;)</b> has to be emitted when a user comes online.</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{\n    authToken: String\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitSetUser"
  },
  {
    "type": "emit",
    "url": "/undoDelete",
    "title": "Undo Deleted Task",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;undoDelete&quot;)</b> has to be emitted when a user wants to undo a deleted task</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{   \n    historyId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitUndodelete"
  },
  {
    "type": "emit",
    "url": "/undoEditSubTask",
    "title": "Undo Edited Sub Task",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;undoEditSubTask&quot;)</b> has to be emitted when a user wants to undo a Sub Task which was Edited</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{   \n    historyId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitUndoeditsubtask"
  },
  {
    "type": "emit",
    "url": "/undoEditTask",
    "title": "Undo Edited Task",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;undoEditTask&quot;)</b> has to be emitted when a user wants to undo a task which was edited</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{   \n    historyId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitUndoedittask"
  },
  {
    "type": "emit",
    "url": "/undoNewSubTask",
    "title": "Undo Sub Task",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;undoNewSubTask&quot;)</b> has to be emitted when a user wants to undo a Sub Task which was created</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{   \n    historyId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitUndonewsubtask"
  },
  {
    "type": "emit",
    "url": "/undoSubTaskDelete",
    "title": "Undo Deleted Sub Task",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;undoSubTaskDelete&quot;)</b> has to be emitted when a user wants to undo a deleted Sub Task</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{   \n    historyId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitUndosubtaskdelete"
  },
  {
    "type": "emit",
    "url": "/undoSubTaskStatus",
    "title": "Undo Sub Task Status",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;undoSubTaskStatus&quot;)</b> has to be emitted when a user wants to undo the status of a Sub Task which was Changed</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{   \n    historyId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitUndosubtaskstatus"
  },
  {
    "type": "emit",
    "url": "/undoTask",
    "title": "Undo new Task",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;undoTask&quot;)</b> has to be emitted when a user wants to undo a creted task in todo list</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{   \n    historyId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitUndotask"
  },
  {
    "type": "emit",
    "url": "/undoTaskStatus",
    "title": "Undo Task Status",
    "version": "0.0.1",
    "group": "Emit",
    "description": "<p>This event <b>(&quot;undoTaskStatus&quot;)</b> has to be emitted when a user wants to undo status of the task which was changed</p>",
    "examples": [
      {
        "title": "The following data has to be emitted",
        "content": "{   \n    historyId\n}",
        "type": "json"
      }
    ],
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EmitUndotaskstatus"
  },
  {
    "type": "listen",
    "url": "/auth-error",
    "title": "event",
    "version": "0.0.1",
    "group": "Listen",
    "description": "<p>This event <b>(&quot;auth-error&quot;)</b>  has to be listened to know if any error has occurred on socket.</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenAuthError"
  },
  {
    "type": "listen",
    "url": "/verify-user",
    "title": "Verification the init user",
    "version": "0.0.1",
    "group": "Listen",
    "description": "<p>This event <b>(&quot;verify-user&quot;)</b> has to be listened on the user's end to verify user</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "ListenVerifyUser"
  }
] });
