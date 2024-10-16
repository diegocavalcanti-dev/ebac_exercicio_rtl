import { render, screen, fireEvent } from '@testing-library/react';
import Post from '..';

describe('Teste para o componente PostComments', () => {
    test('Deve adicionar dois comentários corretamente', () => {
        render(<Post />);

        const input = screen.getByTestId('comment-input');
        const botaEnviar = screen.getByTestId('botao-enviar');

        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(botaEnviar);
        expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(botaEnviar);
        expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
    });
});
