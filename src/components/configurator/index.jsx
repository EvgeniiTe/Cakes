import React from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import * as S from "./styled";

const ConfiguratorRender = ({ products }) => {
  const listCakes = products.map((item) => {
    const { name } = item;
    return <option>{name}</option>;
  });

  return (
    <S.Configurator>
      <Form>
        <Form.Label as="legend">Конфигуратор заказа</Form.Label>

        <Form.Group controlId="conf-form-1">
          <Form.Label>Выберете торт из списка</Form.Label>
          <Form.Control as="select" custom>
            {listCakes}
          </Form.Control>
          <Form.Text className="text-muted">
            Вы можете вернуться к фотографиям тортов на главной странице
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="conf-form-2">
          <Form.Label>Количество килограмм</Form.Label>
          <Form.Control as="select" custom>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Form.Control>
          <Form.Text className="text-muted">
            Да, есть технические ограничения по количеству килограмм. Однако, Вы
            всегда можете заказать капкейки или же несколько тортов.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="conf-form-3">
          <Form.Label>Количество тортов</Form.Label>
          <Form.Control as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Form.Control>
          <Form.Text className="text-muted">
            Да, есть технические ограничения по количеству тортов на один заказ.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="conf-form-4">
          <Form.Label>
            Вы можете заказать дополнительный декор к торту
          </Form.Label>

          <Row>
            <Col sm={4}>
              <Form.Group controlId="conf-form-4-1">
                <Form.Label>Ягоды:</Form.Label>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Клубника"
                    name="Клубника"
                    id="Клубника"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Голубика"
                    name="Голубика"
                    id="Голубика"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Вишня"
                    name="Вишня"
                    id="Вишня"
                  />
                </Col>
              </Form.Group>
            </Col>

            <Col sm={4}>
              <Form.Group controlId="conf-form-4-2">
                <Form.Label>Темперированный шоколад:</Form.Label>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Шарики"
                    name="Шарики"
                    id="Шарики"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Плоские фигурки"
                    name="Плоские фигурки"
                    id="Плоские фигурки"
                  />
                </Col>
              </Form.Group>
            </Col>

            <Col sm={4}>
              <Form.Group controlId="conf-form-4-3">
                <Form.Label>Надпись на торте:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ограничение 30 символов"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="conf-form-5">
          <Form.Label>Получить фото торта на память</Form.Label>
          <Form.Check
            type="checkbox"
            label="Получить"
            name="Получить"
            id="Получить"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Добавить в корзину
        </Button>
      </Form>
    </S.Configurator>
  );
};

const mapStateToProps = ({ productsList: { products } }) => {
  return { products };
};

export const Configurator = connect(mapStateToProps)(ConfiguratorRender);
