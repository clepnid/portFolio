import React, { Component } from 'react';
import { Window, WindowContent, WindowHeader, Button } from 'react95';
import './styles/fuentes.css'; // Ruta correcta hacia tu archivo CSS
import './styles/ventana-close.css';

class WindowComponentClose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowPosition: { x: props.initialX, y: props.initialY },
            isDragging: false,
            isVisible: false,
            isMaximized: false,
            originalWindowPosition: { x: props.initialX, y: props.initialY },
            isHovered: false,
            isMobile: false // Verifica si es un dispositivo móvil
        };

    }

    componentDidMount = () => {
        // Este método se llama automáticamente después de que el componente se monta en el DOM
        if (window.innerWidth < 768) {
            this.setState({ isMobile: true });
        }
    }


    handleMouseDown = (e) => {
        e.preventDefault();
        const { isMaximized } = this.state;
        if (!isMaximized) {
            this.setState({ isDragging: true });

            const initialX = e.clientX;
            const initialY = e.clientY;

            const deltaX = initialX - this.state.windowPosition.x;
            const deltaY = initialY - this.state.windowPosition.y;

            const handleMouseMove = (e) => {
                this.setState({ windowPosition: { x: e.clientX - deltaX, y: e.clientY - deltaY } });
            };

            const handleMouseUp = () => {
                this.setState({ isDragging: false });

                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            };

            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
    };

    handleCloseClick = () => {
        this.setState({ isVisible: false });
    };

    handleOpenClick = () => {
        this.setState({ isVisible: true });
    };

    handleMaximizeClick = () => {
        const { isMaximized, windowPosition, originalWindowPosition } = this.state;
        if (!isMaximized) {
            this.setState({ originalWindowPosition: { ...windowPosition }, windowPosition: { x: 0, y: 0 } });
        } else {
            this.setState({ windowPosition: { ...originalWindowPosition } });
        }
        this.setState({ isMaximized: !isMaximized });
    };

    render() {
        const { title, contenido } = this.props;
        const { windowPosition, isDragging, isVisible, isMaximized, isHovered, isMobile } = this.state;

        return isVisible ? (
            <Window
                style={{
                    maxWidth: isMobile ? '80%' : '100%', // Ajustar el ancho en dispositivos móviles
                    minWidth: isMobile ? '80%' : '50%', // Ajustar el ancho en dispositivos móviles
                    width: isMaximized ? '100vw' : 'auto',
                    height: 'auto',
                    position: 'absolute',
                    left: windowPosition.x,
                    top: windowPosition.y,
                    fontFamily: 'MS Sans Serif',
                    zIndex: isHovered ? 2 : 1, // Asegúrate de que la ventana maximizada esté encima de otras ventanas
                }}
                onMouseOver={() => this.setState({ isHovered: true })}
                onMouseOut={() => this.setState({ isHovered: false })}
            >
                <WindowHeader style={{ fontFamily: 'MS Sans Serif Bold', display: 'flex', justifyContent: 'space-between', paddingRight: 0 }}
                    onMouseDown={this.handleMouseDown}
                >
                    {title}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button onClick={this.handleMaximizeClick} size="sm" square style={{ background: 'white' }}>
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', paddingLeft: '2px' }}>
                                {isMaximized ? '□' : '◻'}
                            </span>
                        </Button>
                        <Button onClick={this.handleCloseClick} size="sm" square style={{ background: 'red' }}>
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', paddingLeft: '2px', paddingTop: '3px' }}>
                                X
                            </span>
                        </Button>
                    </div>
                </WindowHeader>
                <WindowContent>
                    {contenido}
                </WindowContent>
            </Window>
        ) : null;
    }
}

export default WindowComponentClose;