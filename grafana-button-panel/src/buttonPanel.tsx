import { PanelProps } from '@grafana/data';
import { Button, HorizontalGroup, VerticalGroup } from '@grafana/ui';
import React from 'react';
import { ButtonOptions, Options } from 'types';

interface Props extends PanelProps<Options> {}

export const ButtonPanel: React.FC<Props> = ({ options }) => {
  const renderButtons = (buttons: ButtonOptions[]) => {
    return buttons.map((b: ButtonOptions, index: number) => {
      const text = b.text || 'Button';
      return (
        <Button
          key={index}
          variant={b.variant}
          onClick={async () => {
            //var variables = getTemplateSrv().getVariables();
            console.log('Grafana Button Panel Pressed');
            console.log('Query: ');
            console.log(b.query); //This displays as an error, and will remain as such when built, but it works in Grafana
            var base = 'http://127.0.0.1:5000/Neo4J/';

            var url = new URL(base);
            var params = { query: b.query };
            Object.keys(params).forEach(key =>
              url.searchParams.append(key, params[key])
            );

            console.log(url);
            fetch(url);
          }}
        >
          {text}
        </Button>
      );
    });
  };

  return (
    (options.orientation === 'vertical' && (
      <VerticalGroup justify="center" align="center">
        {renderButtons(options.buttons)}
      </VerticalGroup>
    )) || (
      <HorizontalGroup justify="center" align="center">
        {renderButtons(options.buttons)}
      </HorizontalGroup>
    )
  );
};
