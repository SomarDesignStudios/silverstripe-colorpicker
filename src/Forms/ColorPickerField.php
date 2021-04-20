<?php

namespace SilverStripe\Colorpicker\Forms;

use SilverStripe\Forms\SingleSelectField;

class ColorPickerField extends SingleSelectField
{
    protected $schemaComponent = 'ColorPickerField';

    public function __construct($name, $title = null, $source = array(), $value = null)
    {
        parent::__construct($name, $title, $source, $value);

        $this->addExtraClass('color-picker-field');
    }

    public function getSchemaDataDefaults()
    {
        $schemaData = parent::getSchemaDataDefaults();

        $schemaData['source'] = $this->getSource();
        $schemaData['name'] = $this->getName();
        $schemaData['value'] = $this->Value();

        // for direct use within React
        $schemaData['colors'] = $this->getSource();

        return $schemaData;
    }

    public function getSourceValues()
    {
        return array_merge([''], array_map(function ($color) {
            return $color['CSSClass'];
        }, $this->getSource()));
    }
}
