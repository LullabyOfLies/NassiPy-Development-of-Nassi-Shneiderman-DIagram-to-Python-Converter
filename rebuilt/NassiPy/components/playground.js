class Playground extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <main id="playgroundBody">
                <!-- Controls -->
                <section id="playgroundControls">
                    <div class="container-fluid controls">
                        <div class="container">
                            <div class="row">
                                <div class="menu">
                                <button onclick="upload();">Open</button>
                                <button onclick="save();">Save</button>          
                                <button onclick="removeElement();">Delete</button>
                                <button onclick="undo();">Undo</button>
                                <button onclick="redo();">Redo</button>
                                <button id="png" onclick="getImage();">Export PNG</button>
                                <button onclick="clearCanvas();">Clear all</button>
                                <button onclick="checkTextAreaCount();">Convert</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Canvas -->
                <section id="playgroundCanvas">
                    <div class="container-fluid canvas">
                        <div class="row">
                            <!-- sidebar -->
                            <div class="col-lg-3 col-md-12" id="sidebar">
                                <!-- 1. Process -->
                                <div class="dblock process" draggable="true" ondragstart="drag(event)">
                                    <textarea rows="1" placeholder="Process" ondrop="return false;" oninput="textareaResize(event);"
                                        ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                        onfocusout="enableDraggableParent(event);"></textarea>
                                </div>

                                <!-- 2. Decision -->
                                <div class="dblock decision decision-two" draggable="true" ondragstart="drag(event)">
                                    <div class="droparea drop-before-begin" ondrop="drop(event)" ondragover="allowDrop(event)"
                                        ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                    </div>
                                    <textarea rows="1" placeholder="Condition" ondrop="return false;" oninput="textareaResize(event);"
                                        ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                        onfocusout="enableDraggableParent(event);"></textarea>
                                    <div class="triangles">
                                        <svg><line x1="-5%" y1="0" x2="105%" y2="100%" /></svg>
                                        <svg><line x1="-5%" y1="100%" x2="105%" y2="0" /></svg>
                                    </div>
                                    <div class="decision-branches">
                                        <div class="decision-branch">
                                            <textarea class="decision-two-ta" rows="1" placeholder="True" ondrop="return false;"
                                                oninput="textareaResize(event);" ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                                onfocusout="enableDraggableParent(event);"></textarea>
                                
                                            <div class="droparea drop-before-end decision-two-da" ondrop="drop(event)" ondragover="allowDrop(event)"
                                                ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                            </div>
                                        </div>
                                        <div class="decision-branch">
                                            <textarea class="decision-two-ta" rows="1" placeholder="False" ondrop="return false;"
                                                oninput="textareaResize(event);" ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                                onfocusout="enableDraggableParent(event);"></textarea>
                
                                            <div class="droparea drop-before-end decision-two-da" ondrop="drop(event)" ondragover="allowDrop(event)"
                                                ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- 3. Case Statement -->
                                <div class="dblock decision" draggable="true" ondragstart="drag(event)" ondrop="decisionDrop(event);">
                                    <div class="droparea drop-before-begin" ondrop="drop(event)" ondragover="allowDrop(event)"
                                        ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                    </div>
                                    <textarea rows="1" placeholder="Condition" ondrop="return false;" oninput="textareaResize(event);"
                                        ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                        onfocusout="enableDraggableParent(event);"></textarea>
                                    <div class="triangles">
                                        <svg><line x1="-5%" y1="0" x2="105%" y2="100%" /></svg>
                                        <svg><line x1="-5%" y1="100%" x2="105%" y2="0" /></svg>
                                    </div>
                                    <div class="decision-branches">
                                    <div class="decision-branch">
                                        <textarea rows="1" placeholder="True" ondrop="return false;" oninput="textareaResize(event);"
                                        ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                        onfocusout="enableDraggableParent(event);"></textarea>
                                        <div class="droparea drop-before-end" ondrop="drop(event)" ondragover="allowDrop(event)"
                                            ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                        </div>
                                    </div>
                                    <div class="decision-branch">
                                        <textarea rows="1" placeholder="False" ondrop="return false;" oninput="textareaResize(event);"
                                            ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                            onfocusout="enableDraggableParent(event);"></textarea>
                                        <div class="droparea drop-before-end" ondrop="drop(event)" ondragover="allowDrop(event)"
                                            ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                        </div>
                                    </div>
                                    <div class="decision-branch">
                                        <textarea rows="1" placeholder="Default" ondrop="return false;" oninput="textareaResize(event);"
                                            ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                            onfocusout="enableDraggableParent(event);"></textarea>
                                        <div class="droparea drop-before-end" ondrop="drop(event)" ondragover="allowDrop(event)"
                                            ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            
                                <div class="dblock decision-item" draggable="true" ondragstart="drag(event)">
                                    <textarea rows="1" placeholder="Branch" ondrop="return false;" oninput="textareaResize(event);"
                                        ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                        onfocusout="enableDraggableParent(event);"></textarea>
                                </div>

                                <!-- 4. Iteration -->
                                <div class="dblock iteration" draggable="true" ondragstart="drag(event)">
                                    <div class="droparea drop-before-begin" ondrop="drop(event)" ondragover="allowDrop(event)"
                                        ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                    </div>
                                    <textarea class="left-ta rewh-ta" rows="1" placeholder="Condition" ondrop="return false;"
                                        oninput="textareaResize(event);" ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                        onfocusout="enableDraggableParent(event);"></textarea>
                                    <div class="droparea drop-before-end drop-iteration" ondrop="drop(event)" ondragover="allowDrop(event)"
                                        ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                    </div>
                                </div>

                                <!-- 5. Repeat While -->
                                <div class="dblock repeatwhile" draggable="true" ondragstart="drag(event)">
                                    <div class="droparea drop-before-begin" ondrop="drop(event)" ondragover="allowDrop(event)"
                                        ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                    </div>
                                    <div class="droparea drop-before-end drop-repeatwhile" ondrop="drop(event)" ondragover="allowDrop(event)"
                                        ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                    </div>
                                    <textarea class="left-ta" rows="1" placeholder="Condition" ondrop="return false;" oninput="textareaResize(event);"
                                        ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                        onfocusout="enableDraggableParent(event);"></textarea>
                                </div>
                                
                                <!-- 6. Begin End -->
                                <div class="dblock begin-end" draggable="true" ondragstart="drag(event)">
                                    <div class="droparea drop-before-begin" ondrop="drop(event)" ondragover="allowDrop(event)"
                                        ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                    </div>
                                    <textarea class="left-ta" rows="1" placeholder="Condition" ondrop="return false;" oninput="textareaResize(event);"
                                        ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                        onfocusout="enableDraggableParent(event);"></textarea>
                                    <div class="droparea drop-before-end drop-begin-end" ondrop="drop(event)" ondragover="allowDrop(event)"
                                        ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                    </div>
                                    <textarea class="left-ta" rows="1" placeholder="Condition" ondrop="return false;" oninput="textareaResize(event);"
                                        ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                        onfocusout="enableDraggableParent(event);"></textarea>
                                </div>

                                <!-- 7. Parallel Processing -->
                                <div class="dblock decision parallel" draggable="true" ondragstart="drag(event)" ondrop="parallelDrop(event);">
                                    <div class="droparea drop-before-begin" ondrop="drop(event)" ondragover="allowDrop(event)"
                                        ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                    </div>
                                    <div class="parallel-top">
                                        <svg><line x1="0" y1="103%" x2="20%" y2="-3%" /></svg>
                                        <svg><line x1="80%" y1="-3%" x2="100%" y2="103%" /></svg>
                                    </div>
                                    <div class="decision-branches">
                                        <div class="decision-branch">
                                            <div class="droparea drop-before-end par-da" ondrop="drop(event)" ondragover="allowDrop(event)"
                                                ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                            </div>
                                        </div>
                                        <div class="decision-branch">
                                            <div class="droparea drop-before-end par-da" ondrop="drop(event)" ondragover="allowDrop(event)"
                                                ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                            </div>
                                        </div>
                                        <div class="decision-branch">
                                            <div class="droparea drop-before-end par-da" ondrop="drop(event)" ondragover="allowDrop(event)"
                                                ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="parallel-bottom">
                                        <svg><line x1="0" y1="-3%" x2="20%" y2="103%" /></svg>
                                        <svg><line x1="80%" y1="103%" x2="100%" y2="-3%" /></svg>
                                    </div>
                                </div>
                            
                                <div class="dblock parallel-item" draggable="true" ondragstart="drag(event)">
                                    <textarea rows="1" placeholder="Parallel Block" ondrop="return false;" oninput="textareaResize(event);"
                                        ondragstart="return false;" onfocusin="disableDraggableParent(event);"
                                        onfocusout="enableDraggableParent(event);"></textarea>
                                </div>
                            </div>

                            <!-- main canvas -->
                            <div class="col-lg-9 col-md-12" id="canvasBoard">
                                <div id="canvas">
                                    <div id="rblock" class="dblock program">
                                        <textarea rows="1" placeholder="Program" ondrop="return false;" oninput="textareaResize(event);"></textarea>
                                        <div class="droparea drop-before-end" ondrop="drop(event)" ondragover="allowDrop(event)"
                                            ondragenter="dragEnter(event)" ondragleave="dragLeave(event)">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        `
    }
}

customElements.define('nassipy-playground', Playground);