import React, { Component } from 'react';
import { Window, WindowContent, WindowHeader } from 'react95';
import './styles/fuentes.css';

class WindowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowPosition: { x: props.initialX, y: props.initialY },
            isDragging: false,
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
    };

    handleMouseOver = () => {
        this.setState({ isHovered: true });
    };

    handleMouseOut = () => {
        this.setState({ isHovered: false });
    };

    render() {
        const { title, contenido } = this.props;
        const { windowPosition, isDragging, isHovered, isMobile } = this.state;

        return (
            <Window
                style={{
                    minWidth: isMobile ? '80%' : '50%', // Ajustar el ancho en dispositivos móviles
                    maxWidth: isMobile ? '80%' : '50%', // Ajustar el ancho en dispositivos móviles
                    width: 'auto',
                    position: 'absolute',
                    left: windowPosition.x,
                    top: windowPosition.y,
                    fontFamily: 'MS Sans Serif',
                    zIndex: isHovered ? 2 : 0
                }}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                <WindowHeader
                    style={{ fontFamily: 'MS Sans Serif Bold' }}
                    onMouseDown={this.handleMouseDown}
                >
                    {title}
                </WindowHeader>
                <WindowContent>
                    {contenido}
                </WindowContent>
            </Window>
        );
    }
}

export default WindowComponent;
