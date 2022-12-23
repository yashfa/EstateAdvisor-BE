import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Property } from '../schemas/property.schema';
import { PropertyService } from '../service/property.service';

@Controller('property')
export class PropertyController {
    constructor(private readonly propertyService: PropertyService){}

    @Post()
    async createPrperty(@Res() response, @Body() property: Property) {
        const newProperty = await this.propertyService.create(property);
        return response.status(HttpStatus.CREATED).json({
            newProperty
        })
    }

    @Get()
    async fetchAllProperties(@Res() response) {
        const properties = await this.propertyService.readAll();
        return response.status(HttpStatus.OK).json({
            properties
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const property = await this.propertyService.readById(id);
        return response.status(HttpStatus.OK).json({
            'message': 'OK',
        });
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() property: Property) {
        const updatedProperty = await this.propertyService.update(id, property);
        return response.status(HttpStatus.OK).json({
            updatedProperty
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedProperty = await this.propertyService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedProperty
        })
    }
}