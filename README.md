# hotpotatoes
## A playground for a future possible web-based version of the Hot Potatoes software application

The original Hot Potatoes software for Windows was written in Delphi over 25 years ago, and the Windows versions have been updated periodically, but maintaining and distributing software for Windows has become increasingly time-consuming and expensive, and I no longer use Windows myself. The Mac/Java version was abandoned many years ago. There are also architectural issues with the original Hot Potatoes design, such as the inability to combine different item types in the same exercise, which really mandate a full re-imagining of how the software should work. 

The obvious solution is a completely web-based architecture where a single-page Web interface using entirely client-side JS could serve as the interface for creating and editing exercises, which could then be downloaded to the user's computer and distributed through their own websites. Users could download their own copies of the editing software or choose to run them locally as apps. This repository is intended as a playground for ideas around the architecture of such a version of Hot Potatoes. No timeline exists for finishing or releasing anything, and I expect this to be a hobby project for myself that takes many years to produce anything useful, if it ever does.

Basic ideas:

 - Code will be pure, valid (X)HTML5, ECMAScript and CSS with no external dependencies (so Endings-compliant).
 - The codebase will be modular and object-oriented.
 - All code modules will be accompanied by tests.
 - There will be a single exercise format serialization that serves both as the data file for the editor and as the rendered exercise for the student.
 - File i/o will use the File System API.
 - All item types will derive from a single abstract base class, and any combination of item types can appear in a single exercise.

More thoughts to be added as I do some early experimentation.
